import React from "react";
import { Form } from "antd";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="h-screen d-flex justify-content-center align-items-center bg-primary">
      <div className="bg-white p-4 w-400">
        <h4>SHEYJOBS - LOGIN</h4>
        <div className="divider"></div>
        <Form layout="vertical">
          <Form.Item name="email" label="Email">
            <input type="text" />
          </Form.Item>
          <Form.Item name="password" label="Password">
            <input type="password" />
          </Form.Item>
          <button className="primary-contained-btn w-100 mt-2" type="submit">
            Login
          </button>
          <Link to="/register" className="d-block mt-2">
            Not a member? Click here to register
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;
