import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import "./Signup.css";
import { db } from "./firebase";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confPasswordRef = useRef();
  const fnameRef = useRef();
  const lnameRef = useRef();
  const ageRef = useRef();
  const countryRef = useRef();
  const avatarRef = useRef();

  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const History = useHistory();

  const handleInsert = async () => {
    // db.collection("users")
    //   .add({
    //     name: String(fnameRef.current.value + " " + lnameRef.current.value),
    //     age: ageRef.current.value,
    //     email: String(emailRef.current.value),
    //     password: String(passwordRef.current.value),
    //     country: String(countryRef.current.value),
    //     avatar: String(avatarRef.current.value),
    //   })
    //   .then((result) => {
    //     console.log("Document added successfully!", result);
    //   })
    //   .catch((err) => {
    //     console.log("Failed to add document!", err);
    //   });

    db.collection("users")
      .doc("93HiqYuhN9gjk4iyWpqF")
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data);
        }
      });

    console.log("going");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (passwordRef.current.value !== confPasswordRef.current.value) {
      return setError("Passwords do not match!");
    }

    try {
      setLoading(true);

      await handleInsert();
      await signup(emailRef.current.value, passwordRef.current.value);

      History.push("/");
    } catch {
      setError("Failed to Create your Account");
    }
  };

  return (
    <div className="signup">
      <h1>Signup Page</h1>
      {error && (
        <div className="signup_error">
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="signup_main">
          <div className="signup_name">
            <input
              type="text"
              required
              ref={fnameRef}
              placeholder="First Name"
            />
            <input
              type="text"
              required
              ref={lnameRef}
              placeholder="Last Name"
            />
          </div>
          <div className="signup_about">
            <input type="number" required ref={ageRef} placeholder="Age" />
            <input
              type="text"
              required
              ref={countryRef}
              placeholder="Country"
            />
          </div>
          <div className="signup_email">
            <input
              type="email"
              required
              ref={emailRef}
              placeholder="Email Address"
            />
          </div>
          <div className="signup_password">
            <input
              type="password"
              required
              ref={passwordRef}
              placeholder="Password"
            />
            <input
              type="password"
              required
              ref={confPasswordRef}
              placeholder="Confirm Password"
            />
          </div>
          <div className="signup_avatar">
            <input type="file" ref={avatarRef} />
          </div>
        </div>
        <button disabled={loading} type="submit">
          Sign Up
        </button>
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
