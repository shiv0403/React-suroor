import React, { useRef } from "react";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confPasswordRef = useRef();

  return (
    <div className="signup">
      <h1>Signup Page</h1>
      <form>
        <label htmlFor="email" Email></label>
        <input type="email" required ref={emailRef} />
        <label htmlFor="password">Password</label>
        <input type="password" required ref={passwordRef} />
        <label htmlFor="confPassword">Password Confirmation</label>
        <input type="password" required ref={confPasswordRef} />
      </form>
    </div>
  );
}

export default Signup;
