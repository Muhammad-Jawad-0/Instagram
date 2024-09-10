// import React, { useState } from "react";
// import "./signup.scss";
// import { FaFacebook } from "react-icons/fa6";
// import Buttons from "../../componenets/Button/Button";
// import { UserOutlined } from "@ant-design/icons";
// import { Input, Space } from "antd";
// import { Link } from "react-router-dom";

// function Signup() {
//   const [passwordVisible, setPasswordVisible] = React.useState(false);

//   const [email, setEmail] = useState("");
//   const [fullname, setFullname] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div className="container">
//       <div className="content">
//         <h1>Instagram</h1>
//         <p>Sign up to see photos and videos from your friends.</p>
//         <div className="btn">
//           <FaFacebook className="btn-img" />
//           <p>Login with Facebook</p>
//         </div>

//         <div className="hrDiv">
//           <hr />
//           <p>OR</p>
//           <hr />
//         </div>
//         <div className="inputs">
//           {/* ------- INPUTS --------- */}
//           <Space direction="vertical">
//             {/* <Input.Search placeholder="input password" /> */}
//             <Input
//               className="email"
//               size="meduim"
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Mobile Number or email address"
//               prefix={<UserOutlined />}
//             />
//             <Input
//               className="email"
//               size="meduim"
//               onChange={(e) => setFullname(e.target.value)}
//               placeholder="Full Name"
//               prefix={<UserOutlined />}
//             />
//             <Input
//               className="email"
//               size="meduim"
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="username"
//               prefix={<UserOutlined />}
//             />
//             <Space direction="horizontal">
//               <Input.Password
//                 className="email"
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="password"
//                 visibilityToggle={{
//                   visible: passwordVisible,
//                   onVisibleChange: setPasswordVisible,
//                 }}
//               />
//             </Space>
//             {console.log(email)}
//             {console.log(fullname)}
//             {console.log(username)}
//             {console.log(password)}
//           </Space>
//           {/* ---------------- */}
//         </div>
//         <div className="disclamer">
//           <p>
//             People who use our service may have uploaded your contact
//             information to Instagram. Learn more
//             <br />
//           </p>
//           <p>
//             By signing up, you agree to our Terms, Privacy Policy and Cookies
//             Policy.
//           </p>
//         </div>
//         <div className="button">
//           <Buttons />
//         </div>
//       </div>
//       <div className="content1">
//         <p>
//           Have an Account?{" "}
//           <Link className="link" to="/login">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;


import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import"./signup.css";
// import styles from "./styles.module.css";

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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
		<div className="signup_container">
			<div className="signup_form_container">
				<div className="left">
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className="white_btn">
							Sing in
						</button>
					</Link>
				</div>
				<div className="right">
					<form className="form_container" onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className="input"
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className="input"
						/>
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
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;