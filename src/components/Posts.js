import "./Posts.css";
import React, { useEffect } from "react";
import { fetchAllPosts } from "../api";
import { NavLink } from "react-router-dom";
import NewMessage from "./NewMessage";
import DeletePosts from "./DeletePosts"


const Posts = ({ posts, setPosts, isLoggedIn, myInfo, setMyInfo, username }) => {
  
 
  async function getAllPosts() {
    const fetchPosts = await fetchAllPosts();
    setPosts(fetchPosts);
  }
  useEffect(() => {
    getAllPosts();
  }, []);
  console.log("Posts", posts);
  const getPosts = posts.map((post, index)=> {
      return (
        
          <div className='descriptionBox' key={`mypostsmap: ${index}`}>
          <h1 className='title'>{post.title}</h1>
          <p className='descriptions'>{post.description}</p>
          <p className='descriptions'>{post.author.username}</p>
          <p className='descriptions'>{post.price}</p>
          <p className='descriptions'>{post.location}</p>
          <p className='descriptions'>{post.willDeliver}</p>
        { isLoggedIn ?
          <>
          { post.author.username !== username ?
          <NewMessage myInfo={myInfo} setMyInfo={setMyInfo}/>
          :null
          }
          { post.author.username === username ?
          <>
          <DeletePosts setPosts={setPosts} posts={posts} post={post} />
          <button>Edit will go here</button>
          </>
          : null
          }
          </>
          :null }
          </div>  
      )
  })
  
  return (
    <>
    { localStorage.getItem("token") ? 
    <div>
    <NavLink to='/AddPosts'>Add New Post</NavLink>
    </div> 
    : null
    }
    <div>
    {getPosts}
    </div> 
    </>
  )
};
export default Posts;