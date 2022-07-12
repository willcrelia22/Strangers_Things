import { registerPerson } from "../api";
import React, {useState} from 'react'
import "./Register.css"



function Register ({username, password, setuserName, setPassword, setIsLoggedIn}) {
    async function handleSubmit(event) {
        event.preventDefault()
        const token = await registerPerson(username, password)
        if (token) {
            setIsLoggedIn(true)  
            localStorage.setItem("token", token)
            localStorage.setItem("username", username )
            setuserName(username)
            }
    } 
    return (
        <div id = "registerBox">
       <form onSubmit={handleSubmit}>
            <h1>sign up for an account</h1>
            <label>create username</label>
            <input id="username" 
            placeholder="create username here"
            value = {username}
            onChange={(event)=>{
                setuserName(event.target.value)
            }}>
            </input>
            <label>password</label>
            <input id="password" 
            placeholder="create password here"
            value = {password}
                onChange={(event)=>{
                    setPassword(event.target.value)
                }}></input>
            <button type="submit">create account</button>
        </form>
        </div>

    )


}

export default Register