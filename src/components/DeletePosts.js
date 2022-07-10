import './DeletePosts.css'
import react from 'react'
import { removePost, fetchAllPosts } from '../api'




function DeletePosts (posts, setPosts, post){
    const handleOnClick = async (event) => { 
        event.preventDefault()
        const token = localStorage.getItem('token')
        const postID = post._id
        await removePost(token, postID)
        posts = await fetchAllPosts()
        setPosts(posts)
    }   


return (  
 <div onClick={handleOnClick} >   
<button>Delete</button>
</div> 
)
}

export default DeletePosts