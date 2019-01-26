import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/workoutActions";

class SignUp extends Component {
  state = { name: "", email: "", password: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  signUp = () => {
    const { name, email, password } = this.state;
    this.props.signUp(name, email, password);
    this.setState({ name: "", email: "", password: "" });
    alert("Зарегистрирован");
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h2>Sign Up</h2>
        <Form>
          <Form.Field>
            <Form.Input
              label="Имя"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Name"
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
              placeholder="Password"
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

const mapDispatchToProps = dispatch => ({
  signUp: (name, email, password) => dispatch(signUp(name, email, password))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
