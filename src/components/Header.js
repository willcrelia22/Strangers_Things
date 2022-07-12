import React from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import "./Header.css"

function Header({ isLoggedIn, setIsLoggedIn, setuserName, setPassword }) {
  let navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    navigate("/");
    setuserName("");
    setPassword("");
  };
  return (
    <header className="NavBar">
      <h1 id="title">strangers things</h1>
      {isLoggedIn ? (
        <>
          <NavLink className="Links" to="/Posts">
            posts
          </NavLink>
          <NavLink className="Links" to="/Profile">
            profile
          </NavLink>
          <button id="logout" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <>
          <NavLink className="Links" to="/Login">
            login
          </NavLink>
          <NavLink className="Links" to="/Posts">
            posts
          </NavLink>
        </>
      )}
    </header>
  );
}
export default Header;
