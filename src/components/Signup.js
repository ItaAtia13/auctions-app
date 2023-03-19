import React, { useState } from "react";
import axios from "axios";
import GetCookie from "../utils/GetCookie";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && password) {
      const response = await axios.post("http://localhost:8989/Sign-Up", {
        params: {
          username: username,
          password: password,
        },
      });
      if (response.status == 200) {
        // GetCookie("userInfo");
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

  const ConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your username:
          <input type="text" value={username} onChange={usernameHandler} />
        </label>
        <label>
          Enter your Password:
          <input type="password" value={password} onChange={passwordHandler} />
        </label>
        <label>Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={ConfirmPasswordHandler}
        />
        <button type="submit">Sign Up</button>
      </form>
      {/* <p>Already have an account? <Link to="/login">Login</Link></p> */}
    </div>
  );
};
export default Signup;
