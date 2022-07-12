import { NavLink } from 'react-router-dom'
import React from "react";
import {loginUser} from '../api'
import { useNavigate } from 'react-router';




function Login ({username, setuserName, password, setPassword, setIsLoggedIn}){
    let navigate = useNavigate();
    const handleOnChange = (event) => {
        const input = event.target.id
        if(input === 'username'){
            setuserName(event.target.value)
        }
        else {
            setPassword(event.target.value)
        }
    }
    
    const handleSubmit = async(event) =>{
    
    event.preventDefault()
      const token = await loginUser(username, password)
//    if (token && token.length){
      token ? setIsLoggedIn(true) : false 
      localStorage.setItem("token", token)
      navigate('/Profile')
    // 
    }

    const registerButton = async(event) => {
        event.preventDefault()
        navigate('/Register')
    }

    return (
       <div id = "logInBox">
       <form onSubmit={handleSubmit}>
            <h1>Log into your Stranger's Things account</h1>
            <label id="username">User Name
            <input id="username" 
                type="text"
                placeholder="Your Username Here"
                value = {username}
                onChange={handleOnChange}/>
            </label>
            <label>Password
            <input id="password" 
                type="text"
                placeholder="Your Password Here"
                value = {password}
                onChange={handleOnChange}/>
            </label>
            <button id="submit" type = "submit">Submit</button>
            <button id="register" type ="submit" onClick ={registerButton}>Don't have an account? Create one here.</button>
        </form>
        </div>
    )
}

export default Login
