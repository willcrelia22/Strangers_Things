import React from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router";
import "./Login.css"

function Login({
  username,
  setuserName,
  password,
  setPassword,
  setIsLoggedIn,
}) {
  let navigate = useNavigate();
  const handleOnChange = (event) => {
    const input = event.target.id;
    if (input === "username") {
      setuserName(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await loginUser(username, password);
    token ? setIsLoggedIn(true) : false;
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    setuserName(username);
    navigate("/Profile");
  };

  const registerButton = async (event) => {
    event.preventDefault();
    navigate("/Register");
  };

  return (
    <div id="logInBox">
      <form onSubmit={handleSubmit}>
        <h1>log into account</h1>
        <label>
          username
          <input
            id="username"
            type="text"
            placeholder="username here"
            value={username}
            onChange={handleOnChange}
          />
        </label>
        <label>
          password
          <input
            id="password"
            type="text"
            placeholder="password here"
            value={password}
            onChange={handleOnChange}
          />
        </label>
        <button id="submit" type="submit">
          submit
        </button>
        <button id="register" type="submit" onClick={registerButton}>
          create account
        </button> 
      </form>
    </div>
  );
}

export default Login;
