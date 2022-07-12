import React, { useState, useEffect } from "react";
import { modifyPost } from "../api";
import { fetchAllPosts } from "../api";
import "./EditPost.css"

function EditPost({ post, _id, posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("free");
  const [location, setLocation] = useState("On Request");
  const [willDeliver, setWillDeliver] = useState(false);

  const handleEdit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const postID = post._id;
    await modifyPost(
      token,
      _id,
      title,
      description,
      price,
      location,
      willDeliver
    );
    const newEditedPosts = await fetchAllPosts();
    setPosts(newEditedPosts);
    setTitle("");
    setDescription("");
    setPrice("");
    setLocation("");
    setWillDeliver(false);
  };

  useEffect(() => {}, [posts]);

  return (
    <div id="editPostBox">
      <form id="editPost" onSubmit={handleEdit}>
        <label className="postTitles">Title:</label>
        <input
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          type="text"
          title="title"
          value={title}
          required
        />
        <label className="postTitles">Description:</label>
        <input
          id="descriptionID"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          type="text"
          description="description"
          value={description}
          required
        />
        <label className="postTitles">Location:</label>
        <input
          className="postTitles"
          onChange={(event) => {
            setLocation(event.target.value);
          }}
          type="text"
          location="location"
          value={location}
        />
        <label className="postTitles">Price:</label>
        <input
          className="postTitles"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
          type="text"
          price="price"
          value={price}
          required
        />
        <div className="postTitles">
          <input
            id="checkbox"
            className="postTitles"
            onChange={(event) => {
              setWillDeliver(event.target.value);
            }}
            type="checkbox"
            name="delivery"
            value={willDeliver}
          />
          Will Deliver
        </div>
        <button className="submitPost" type="submit">
          Edit Post
        </button>
      </form>
    </div>
  );
}

export default EditPost;
