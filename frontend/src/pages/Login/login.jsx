import React from "react";
import "./login.scss";
import { FaFacebook } from "react-icons/fa6";
import { Button, Flex } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

function login() {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <div className="container">
      <div className="content">
        <h1>Instagram</h1>
        <div className="inputs">
          {/* <LoginInput /> */}
          <Space direction="vertical">
            <Input
              className="email"
              size="meduim"
              placeholder="phone number, username or email address"
              prefix={<UserOutlined />}
            />
            <Space direction="horizontal">
              <Input.Password
                className="email"
                placeholder="password"
                visibilityToggle={{
                  visible: passwordVisible,
                  onVisibleChange: setPasswordVisible,
                }}
              />
            </Space>
          </Space>
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
            Don't have an account?{" "}
            <Link className="link" to="/signup">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default login;
