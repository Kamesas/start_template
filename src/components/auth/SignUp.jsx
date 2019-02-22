import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { usersLogin } from "../../store/actions/workoutActions";
import { fire } from "../../firebase/firebase";
import _ from "lodash";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    redirect: false,
    displayName: ""
  };

  componentDidMount() {
    this.props.usersLogin();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  verifiLogin = () => {
    const logins = _.map(this.props.users, us => us);
    const filteredLogin = logins.some(login => login === this.state.name);
    return filteredLogin;
  };

  updateDisplayName = (name, user) => {
    const fireAuth = fire.auth();
    fireAuth.currentUser.updateProfile({ displayName: name }).then(
      function() {
        //console.log(user.user.displayName);
      },
      function(error) {
        console.log(error);
      }
    );
  };

  addUsersLogin = login => async dispatch => {
    const databaseRef = fire.database().ref();
    databaseRef
      .child("usersLogin")
      .push()
      .set(login);
  };

  signUp = () => {
    const { name, email, password } = this.state;
    const fireAuth = fire.auth();
    if (!this.verifiLogin()) {
      fireAuth
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          this.updateDisplayName(name, user);
        })
        .then(this.addUsersLogin(name))
        .then(this.setState({ displayName: name }))
        .catch(error => {
          console.log(error.message);
          //alert(error);
        });
    } else console.log("Этот логин занят");
  };

  render() {
    this.verifiLogin();
    const { name, email, password } = this.state;

    if (fire.auth().currentUser) {
      return (
        <div>
          <h1>{this.state.displayName}</h1>
          <h2>Успешно зарегистрирован</h2>
        </div>
      );
    }

    return (
      <div>
        <h2>Регистрация</h2>
        <Form>
          <Form.Field>
            <Form.Input
              label="Логин"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Логин"
            />
            <Form.Input
              label="Email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Email"
            />
            <Form.Input
              label="Пароль"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Пароль"
            />
          </Form.Field>
          <Button type="submit" onClick={this.signUp}>
            SignUp
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.usersLogin
});

const mapDispatchToProps = dispatch => ({
  usersLogin: () => dispatch(usersLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
