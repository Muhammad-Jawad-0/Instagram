import React, { useState } from 'react';
import "./input.scss"
import { UserOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';


const Inputs = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const [email,setEmail] = useState("");
  const [fullname,setFullname] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  return (
    <Space direction="vertical">
      {/* <Input.Search placeholder="input password" /> */}
      <Input className='email' size="meduim" onChange={(e) => setEmail(e.target.value)} placeholder="Mobile Number or email address" prefix={<UserOutlined />} />
      <Input className='email' size="meduim" onChange={(e) => setFullname(e.target.value)} placeholder="Full Name" prefix={<UserOutlined />} />
      <Input className='email' size="meduim" onChange={(e) => setUsername(e.target.value)} placeholder="username" prefix={<UserOutlined />} />
      <Space direction="horizontal">
        <Input.Password
        className='email'
        onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
        />
      </Space>
      {/* {console.log(email)}
      {console.log(fullname)}
      {console.log(username)}
      {console.log(password)} */}
    </Space>

  );
};
export default Inputs;