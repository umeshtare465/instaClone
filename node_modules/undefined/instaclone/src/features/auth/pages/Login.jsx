import React from "react";
import "../style/form.scss";
const Login = () => {
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
            type="password"
            name="password"
            id="password"
            placeholder="enter password"
          />
          <button className="button primary-button">Login</button>
        </form>
      </div>
    </main>
  );
};

export default Login;
