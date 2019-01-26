import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { signUp, usersLogin } from "../../store/actions/workoutActions";
import { Redirect } from "react-router-dom";
import _ from "lodash";

class SignUp extends Component {
  state = { name: "", email: "", password: "", redirect: false };

  componentDidMount() {
    this.props.usersLogin();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  varifiLogin = () => {
    const logins = _.map(this.props.users, us => us);
    const filteredLogin = logins.some(login => login === this.state.name);
    return filteredLogin;
  };

  signUp = () => {
    const { name, email, password } = this.state;
    if (!this.varifiLogin()) {
      this.props.signUp(name, email, password);
      this.setState({ name: "", email: "", password: "", redirect: true });
    } else {
      alert("Этот логин занят");
    }
  };

  render() {
    this.varifiLogin();
    const { name, email, password, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/workout" />;
    }
    return (
      <div>
        <h2>Sign Up</h2>
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
  signUp: (name, email, password) => dispatch(signUp(name, email, password)),
  usersLogin: () => dispatch(usersLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
