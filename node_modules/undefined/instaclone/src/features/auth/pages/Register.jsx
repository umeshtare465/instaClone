import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
const Register = () => {
  const { loading, handleRegister } = useAuth();

  const [username, setusername] = useState("");

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    await handleRegister(username, email, password);
    navigate("/");
  };

  if (loading) {
    return <main>loading...</main>;
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <input
            onInput={(e) => {
              setusername(e.target.value);
            }}
            type="text"
            name="username"
            id="username"
            placeholder="enter username"
          />
          <input
            onInput={(e) => {
              setemail(e.target.value);
            }}
            type="email"
            name="email"
            id="email"
            placeholder="enter email"
          />
          <input
            onInput={(e) => {
              setpassword(e.target.value);
            }}
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
