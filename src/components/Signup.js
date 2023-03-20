import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GetCookie from "../utils/GetCookie";
import { sendApiPostRequest } from "../utils/Request";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendApiPostRequest(
      "http://localhost:8989/sign-up?",
      {
        username,
        password,
      },
      (response) => {
        if (response.data.success) {
          console.log("ok!");
          //navigate to Login page when sign-up finished successfuly
          navigate("/login");
        } else {
          alert("wrong details!");
        }
      }
    );
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

  // let navigate = useNavigate();
  // const routeChange = () => {
  //   let path = `http://localhost:3000/login`;
  //   navigate(path);
  // };

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
