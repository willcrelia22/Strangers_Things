import React from "react";
import { useNavigate } from 'react-router'
import { NavLink } from "react-router-dom";

function Header({ isLoggedIn, setIsLoggedIn, setuserName, setPassword }) {
let navigate = useNavigate();
  const logout = ()=> {
      localStorage.removeItem("token")
      setIsLoggedIn(false)
      navigate('/')
      setuserName("")
      setPassword("")
           
  }
    return (
    <header className="NavBar">
      <h1 id="title">Stranger's Things</h1>
      {isLoggedIn ? (
        <>
          <NavLink className="Links" to="/">Home</NavLink>
          <NavLink className="Links"to="/Posts">Posts</NavLink>
          <NavLink className="Links"to="/Profile">Profile</NavLink>
          <button id="logout" onClick={logout}>Logout</button>
        </>
      ) : (
        <>
        <NavLink className="Links"to='/Login'>Login</NavLink>
          <NavLink className="Links"to="/">Home</NavLink>
          <NavLink className="Links"to="/Posts">Posts</NavLink>
        </>
      )}
    </header>
  );
}
export default Header;