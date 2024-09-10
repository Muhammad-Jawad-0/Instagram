import "./App.css";
import { BrowserRouter ,Route, Routes, Navigate } from "react-router-dom";
import Signup from "./pages/Signup/signup";
import Login from "./pages/Login/login";
import Home from "./pages/Home/Home";

function App() {
  const user = localStorage.getItem("token");
  return (
    <>
      <BrowserRouter>
      <Routes>
			{user && <Route path="/" exact element={<Home />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
