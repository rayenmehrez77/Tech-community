import React from "react";
import "./SignIn.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";

function SignIn() {
  return (
    <div className="signIn">
      <h4>Sign In</h4>
      <form className="signIn__content">
        <input type="text" placeholder="Username Or Email" required />
        <input type="password" placeholder="Password" /> <br />
        <span>
          <input type="checkbox" />
          Remember
        </span>
        <br />
        <button>Sign In</button>
        <br />
        <div className="lostPassword">
          <AiOutlineQuestionCircle /> Lost Password
        </div>
      </form>
    </div>
  );
}

export default SignIn;
