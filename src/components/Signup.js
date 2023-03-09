import React, { useState } from "react";
const Signup = () => {
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle signup submission
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
          <input type="text" value={name} onChange={usernameHandler} />
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
