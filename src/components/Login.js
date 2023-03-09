import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // TODO: Handle login submission
  const handleSubmit = (e) => {
    e.preventDefault();
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
