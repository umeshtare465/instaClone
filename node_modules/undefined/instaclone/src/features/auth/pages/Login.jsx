import "../style/form.scss";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";
import { useState } from "react";
const Login = () => {
  const { user, loading, handleLogin } = useAuth();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    await handleLogin(username, password);
    navigate("/");
  };
  if (loading) {
    return (
      <main>
        <h1>loading....</h1>
      </main>
    );
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
              setpassword(e.target.value);
            }}
            type="password"
            name="password"
            id="password"
            placeholder="enter password"
          />
          <button className="button primary-button">Login</button>
        </form>
        <p>
          don't have an account? <Link to={"/register"}>Create One.</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
