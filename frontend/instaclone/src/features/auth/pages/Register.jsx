import React from "react";
import { Link } from "react-router";
const Register = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="enter username"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter email"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="enter password"
          />
          <button className="button primary-button">Register</button>
        </form>
        <p>
          you have an account? <Link to={"/login"}>Login to Account.</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
