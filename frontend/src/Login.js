import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import "./Login.css";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const History = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      History.push("/");
    } catch {
      setError("Failed to Login to your Account");
    }
  };

  return (
    <div className="login">
      <h1>Login Page</h1>
      {error && (
        <div className="login_error">
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          required
          ref={emailRef}
          placeholder="Email Address"
        />
        <br />

        <input
          type="password"
          required
          ref={passwordRef}
          placeholder="Password"
        />
        <br />

        <button disabled={loading} type="submit">
          Log In
        </button>
      </form>
      <div className="login_signup">
        <p>
          Need an Account? <Link to="/signup">SignUp</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
