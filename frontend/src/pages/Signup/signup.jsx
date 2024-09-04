import React from "react";
import "./signup.scss";
import { FaFacebook } from "react-icons/fa6";
import Inputs from "../../componenets/Inputs/Inputs";
import Buttons from "../../componenets/Button/Button";
import {Link} from "react-router-dom"

function Signup() {
  return (
    <div className="container">
      <div className="content">
        <h1>Instagram</h1>
        <p>Sign up to see photos and videos from your friends.</p>
        <div className="btn">
          <FaFacebook className="btn-img" />
          <p>Login with Facebook</p>
        </div>

        <div className="hrDiv">
          <hr />
          <p>OR</p>
          <hr />
        </div>
        <div className="inputs">
          <Inputs  />
        </div>
        <div className="disclamer">
          <p>
            People who use our service may have uploaded your contact
            information to Instagram. Learn more
            <br />
          </p>
          <p>
            By signing up, you agree to our Terms, Privacy Policy and Cookies
            Policy.
          </p>
        </div>
        <div className="button">
        <Buttons />
        </div>
      </div>
      <div className="content1">
        <p>Have an Account <Link className="link" to="/login">Login</Link></p>
      </div>
            {console.log(email)}
      {console.log(fullname)}
      {console.log(username)}
      {console.log(password)}
    </div>
  );
}

export default Signup;
