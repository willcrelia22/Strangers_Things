import './NewMessage.css'
import React, {useState} from 'react'
import { createMessage } from '../api'




function NewMessage ({myInfo, setMyInfo}){
const [typedMessage, setTypedMessage] = useState('')

const handleSubmit = async (event) => {
    event.preventDefault()
    const postID = post.author._id
    const token = localStorage.getItem('token')
    const myMessage = await createMessage(token, typedMessage, postID)
    console.log(myMessage)
    
}

return  (
    <aside>
        <form onSubmit={handleSubmit}>
        <input onChange={(event)=>{setTypedMessage(event.target.value)}}type='text' value = {typedMessage} required/>
        <button type='submit'>SEND MESSAGE</button>
        </form>
    </aside>

)
}

export default NewMessage