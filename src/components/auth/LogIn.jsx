import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/workoutActions";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  state = { email: "", password: "", redirect: false };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  logIn = () => {
    const { email, password } = this.state;
    this.props.signIn(email, password);
    this.setState({ email: "", password: "", redirect: true });
  };

  render() {
    const { email, password, redirect } = this.state;

    if (redirect) {
      return <Redirect to="/workout" />;
    }

    return (
      <div>
        <h2>Log In</h2>
        <Form>
          <Form.Field>
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
              placeholder="Password"
            />
          </Form.Field>
          <Button type="submit" onClick={this.logIn}>
            LogIn
          </Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signIn: (email, password) => dispatch(signIn(email, password))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
