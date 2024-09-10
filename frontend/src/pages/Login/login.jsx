// import React, { useState } from "react";
// import "./login.scss";
// import { FaFacebook } from "react-icons/fa6";
// import { Button, Flex } from "antd";
// import { Link } from "react-router-dom";
// import { UserOutlined } from "@ant-design/icons";
// import { Input, Space } from "antd";

// function login() {
//   const [passwordVisible, setPasswordVisible] = React.useState(false);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   return (
//     <div className="container">
//       <div className="content">
//         <h1>Instagram</h1>
//         <div className="inputs">
//           {/* <LoginInput /> */}
//           <Space direction="vertical">
//             <Input
//               className="email"
//               size="meduim"
//               placeholder="phone number, username or email address"
//               onChange={(e) => setEmail(e.target.value)}
//               prefix={<UserOutlined />}
//             />
//             <Space direction="horizontal">
//               <Input.Password
//                 className="email"
//                 placeholder="password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 visibilityToggle={{
//                   visible: passwordVisible,
//                   onVisibleChange: setPasswordVisible,
//                 }}
//                 />
//                 {console.log(email)}
//                 {console.log(password)}
//             </Space>
//           </Space>
//         </div>
//         <div className="button">
//           <div className="div">
//             <Flex
//               disabled={true}
//               vertical
//               gap="small"
//               style={{
//                 width: "100%",
//               }}
//             >
//               <Button type="primary" block>
//                 Login
//               </Button>
//             </Flex>
//           </div>
//         </div>
//         <div className="hrDiv">
//           <hr />
//           <p>OR</p>
//           <hr />
//         </div>
//         <div className="btn">
//           <FaFacebook className="btn-img" />
//           <p>Login with Facebook</p>
//         </div>
//         <p className="forgetmsg">Forgotten Your Password?</p>

//         <div className="content1">
//           <p>
//             Don't have an account?{" "}
//             <Link className="link" to="/signup">
//               SignUp
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default login;


import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import"./login.css";
// import styles from "./styles.module.css";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className="login_container">
			<div className="login_form_container">
				<div className="left">
					<form className="form_container" onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className="input"
						/>
						{error && <div className="error_msg">{error}</div>}
						<button type="submit" className="green_btn">
							Sing In
						</button>
					</form>
				</div>
				<div className="right">
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className="white_btn">
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;