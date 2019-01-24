import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <Form>
          <Form.Field unstackable>
            <Form.Input label="First name" placeholder="Name" />
            <Form.Input label="Email" placeholder="Email" />
            <Form.Input label="Password" placeholder="Password" />
          </Form.Field>
          <Button type="submit">SignUp</Button>
        </Form>
      </div>
    );
  }
}

export default SignUp;
