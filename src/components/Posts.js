import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "../api";
import { NavLink } from "react-router-dom";
import NewMessage from "./NewMessage";
import DeletePosts from "./DeletePosts"
import Search from "./Search"
import EditPost from "./EditPost";
import "./Posts.css"



const Posts = ({ posts, setPosts, isLoggedIn, myInfo, setMyInfo, username, post }) => {
 const [filteredPosts, setFilteredPosts] = useState([]) 
 



 
  async function getAllPosts() {
    const fetchPosts = await fetchAllPosts();
    setPosts(fetchPosts);
  }
  useEffect(() => {
    getAllPosts();
  }, []);
  console.log("Posts", posts);
  let getPosts = []

  if (filteredPosts.length){
    getPosts = filteredPosts.map((post)=> {
      return (
        
          <div className='postsdescriptionBox' key={post._id}>
          <h5 className='title'>{post.title}</h5>
          <p className='descriptions'>description: {post.description}</p>
          <p className='descriptions'>user: {post.author.username}</p>
          <p className='descriptions'>price: {post.price}</p>
          <p className='descriptions'>location: {post.location}</p>
          { post.willDeliver ?
          <p className='descriptions'>delivery: Yes</p>
            :null
          }
          {post.author.username !== localStorage.getItem("username")?
          <NewMessage myInfo={myInfo} setMyInfo={setMyInfo} _id={post._id} post={post}/>
          :null
          }
          { localStorage.getItem("token") && post.author.username === localStorage.getItem("username") ?
          <>
          <DeletePosts post={post} _id={post._id} posts={posts} setPosts={setPosts}  />
          <EditPost post={post} _id={post._id} posts={posts} setPosts={setPosts} username={post.author.username}/>
          </>
          : null
          }
         
          </div>  
      )
  })
  } else {
    getPosts = posts.map((post)=> {
      return (
        
          <div className='postsdescriptionBox' key={post._id}>
          <h5 className='title'>{post.title}</h5>
          <p className='descriptions'>description: {post.description}</p>
          <p className='descriptions'>user: {post.author.username}</p>
          <p className='descriptions'>price: {post.price}</p>
          <p className='descriptions'>location: {post.location}</p>
          { post.willDeliver ?
          <p className='descriptions'>delivery: Yes</p>
            :null
          }
        {  post.author.username !== localStorage.getItem("username") ?
          <NewMessage myInfo={myInfo} setMyInfo={setMyInfo} _id={post._id} post={post}/>
          :null
        }
        
        {localStorage.getItem("token") && post.author.username === localStorage.getItem("username") ?
          <>
          <DeletePosts post={post} _id={post._id} posts={posts} setPosts={setPosts}  />
          <EditPost post={post} _id={post._id} posts={posts} setPosts={setPosts} username={post.author.username}/>
          </>
          : null
          }
          </div>  
      )
  })
  }
  

  
  return (
    <div className="bigBox">
    { localStorage.getItem("token") && isLoggedIn ? 
    <div id="addNewLink">
    <NavLink to='/AddPosts'>new post</NavLink>
    
    </div> 
    : null
    }
    <div id="searchBox">
    <Search posts={posts} setPosts={setPosts} post={post} setFilteredPosts={setFilteredPosts}/>
    <div>{getPosts}</div>
    </div> 
    </div>
  )
};
export default Posts;