import React from 'react';
import "./LoginInput.scss"
import { UserOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';


const LoginInput = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <Space direction="vertical">
      <Input className='email' size="meduim" placeholder="phone number, username or email address" prefix={<UserOutlined />} />
      <Space direction="horizontal">
        <Input.Password
        className='email'
          placeholder="password"
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
        />
      </Space>
    </Space>
  );
};
export default LoginInput;