import './Register.css'
import { registerPerson } from "../api";
import React, {useState} from 'react'



function Register ({username, password, setuserName, setPassword, setIsLoggedIn}) {
    async function handleSubmit(event) {
        event.preventDefault()
        const token = await registerPerson(username, password)
        if (token) {
            setIsLoggedIn(true)  
            localStorage.setItem("token", token)
            }
    } 
    return (
        <div id = "registerBox">
       <form onSubmit={handleSubmit}>
            <h1>Register for your Stranger's Things account</h1>
            <label>Create username:</label>
            <input id="username" 
            placeholder="Create username here"
            value = {username}
            onChange={(event)=>{
                setuserName(event.target.value)
            }}>
            </input>
            <label>Password</label>
            <input id="password" 
            placeholder="Create password"
            value = {password}
                onChange={(event)=>{
                    setPassword(event.target.value)
                }}></input>
            {/* <input id="password" placeholder="Retype password"></input> */}
            <button type="submit">Create account</button>
        </form>
        </div>

    )


}

export default Register