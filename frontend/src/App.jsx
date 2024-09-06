import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup/signup";
import Login from "./pages/Login/login";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
