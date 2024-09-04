import React from "react";
import "./login.scss";
import LoginInput from "../../componenets/LoginInputs/LoginInput";
import { FaFacebook } from "react-icons/fa6";
import { Button, Flex } from "antd";
import { Link } from "react-router-dom";

function login() {
  return (
    <div className="container">
      <div className="content">
        <h1>Instagram</h1>
        <div className="inputs">
          <LoginInput />
        </div>
        <div className="button">
          <div className="div">
            <Flex
              disabled={true}
              vertical
              gap="small"
              style={{
                width: "100%",
              }}
            >
              <Button type="primary" block>
                Login
              </Button>
            </Flex>
          </div>
        </div>
          <div className="hrDiv">
            <hr />
            <p>OR</p>
            <hr />
          </div>
          <div className="btn">
            <FaFacebook className="btn-img" />
            <p>Login with Facebook</p>
          </div>
          <p className="forgetmsg">Forgotten Your Password?</p>

      <div className="content1">
        <p>
          Don't have an account? <Link className="link" to="/signup">Sign Up</Link>
        </p>
      </div>
      </div>
    </div>
  );
}

export default login;
