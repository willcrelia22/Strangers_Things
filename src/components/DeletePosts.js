import react, { useEffect } from "react";
import { removePost, fetchAllPosts } from "../api";

function DeletePosts({ post, _id, posts, setPosts }) {
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const postID = post._id;
    await removePost(token, postID);
    const newPost = await fetchAllPosts();

    setPosts(newPost);
  };
  useEffect(() => {}, [posts]);
  return (
    <form onClick={handleOnSubmit}>
      <button type="submit">Delete</button>
    </form>
  );
}

export default DeletePosts;
