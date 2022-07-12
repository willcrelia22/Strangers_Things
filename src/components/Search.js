import React, { useState } from "react";
import "./Search.css"


function Search({ post, posts, setPosts, setFilteredPosts }) {
  const [searchTerm, setSearchTerm] = useState("");

  function postMatches(post, text) {
    if (post.description.toLowerCase().includes(text.toLowerCase()) || post.title.toLowerCase().includes(text.toLowerCase()) || post.author.username.toLowerCase().includes(text.toLowerCase())) {
      return true;
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
    {
      filteredPosts.length
        ? setFilteredPosts(filteredPosts)
        : setFilteredPosts([]);
    }

}
return (
  <form className="searching"onSubmit={handleSubmit}>
    <input
     id="searchBar"
      type="text"
      placeholder="Search posts..."
      value={searchTerm}
      onChange={(event) => {
        setSearchTerm(event.target.value);
      }}
    ></input>
    <button id="searchButton" type="submit">SEARCH</button>
  </form>

);
}

export default Search;