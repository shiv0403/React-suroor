import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confPasswordRef = useRef();

  const handleSubmit = (e) => {};

  return (
    <div className="signup">
      <h1>Signup Page</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" required ref={emailRef} />
        <label htmlFor="password">Password</label>
        <input type="password" required ref={passwordRef} />
        <label htmlFor="confPassword">Password Confirmation</label>
        <input type="password" required ref={confPasswordRef} />
      </form>
      <div className="signup_login">
        <p>
          Already have an Account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
