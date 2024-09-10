// import React from 'react'

// const Home = () => {
//   return (
//     <div>
//       <h1>Home</h1>
//       <button>Logout</button>
//     </div>
//   )
// }

// export default Home


import "./Home.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className="main_container">
			<nav className="navbar">
				<h1>fakebook</h1>
				<button className="white_btn"onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Main;