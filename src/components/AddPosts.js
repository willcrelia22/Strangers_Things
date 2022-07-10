import './AddPosts.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { createNewPost } from '../api'



const AddPosts = ({username, setPosts, posts}) => {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState('free')
    const [location,setLocation] = useState('On Request')
    const [willDeliver,setWillDeliver] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        
        event.preventDefault()
        const token = localStorage.getItem("token")
        const newPost = {
            title: title,
            description: description,
            price: price,
            location: location,
            willDeliver: willDeliver,
            
        }
        const freshPost = await createNewPost(token, newPost)
        setPosts([...posts, freshPost])
        navigate('/Posts')
        
    }
        return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                </label>
                <input onChange={(event)=>{setTitle(event.target.value)}}type='text' title="title" value = {title} required/>
                <label>
                    Description:
                </label>
                <input onChange={(event)=>{setDescription(event.target.value)}}type='text' description='description' value = {description} required/>
                <label>
                    Location:
                </label>
                <input onChange={(event)=>{setLocation(event.target.value)}}type="text" location='location' value = {location}/>
                <label>
                Price:
                </label>
                <input onChange={(event)=>{setPrice(event.target.value)}}type='text' price='price' value = {price} required/>
                <div> 
                <input onChange={(event)=>{setWillDeliver(event.target.value)}}type='checkbox' id='delivery' name='delivery' value={willDeliver}/>
                Will Deliver
                </div> 
                <button type="submit">Submit Post</button>
            </form>
        </div>
    )
}
export default AddPosts