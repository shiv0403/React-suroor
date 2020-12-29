import React, { useRef } from "react";

function Signup() {
  const emailRef = useRef();

  return (
    <div className="signup">
      <h1>Signup Page</h1>
      <form>
        <label htmlFor="email" Email></label>
        <input type="email" required />
      </form>
    </div>
  );
}

export default Signup;
