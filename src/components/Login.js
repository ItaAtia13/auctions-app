import React, { useState } from "react";
import axios from "axios";
import SetCookie from "../utils/SetCookie";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // TODO: Handle login submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && password) {
      const response = await axios.get("http://localhost:8989/login", {
        params: {
          username: username,
          password: password,
        },
      });
      if (response.status == 200) {
        SetCookie("userInfo", response.data.token);
        console.log("connection has been succeccfuly");
      } else {
        // error message
        console.log("username or pass invalid");
      }
    }
  };
  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={usernameHandler} />
        </label>

        <label>
          Password:
          <input type="password" value={password} onChange={passwordHandler} />
        </label>
        <button type="submit">Login</button>
      </form>
      {/* <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p> */}
    </div>
  );
};
export default Login;
