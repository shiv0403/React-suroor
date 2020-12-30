import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import "./Signup.css";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confPasswordRef = useRef();

  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const History = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (passwordRef.current.value !== confPasswordRef.current.value) {
      setError("Passwords do not match!");
    }

    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      History.push("/");
    } catch {
      setError("Failed to create your Account");
    }
  };

  return (
    <div className="signup">
      <h1>Signup Page</h1>
      {error && <p>{error}</p>}

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
      <div className="signup_login">
        <p>
          Already have an Account? <Link to="/login">SignUp</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
