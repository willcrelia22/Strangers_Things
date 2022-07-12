import React, { useEffect, useState } from "react";
import { Header, Login, Posts, Profile, Register, AddPosts } from "./index.js";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [myInfo, setMyInfo] = useState([]);
  const [username, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setuserName={setuserName}
        setPassword={setPassword}
      />
      <div>
        {isLoggedIn ? (
          <Routes>
            <Route
              path="/Profile"
              element={<Profile myInfo={myInfo} setMyInfo={setMyInfo} />}
            />

            <Route
              path="/Posts"
              element={
                <Posts
                  posts={posts}
                  setPosts={setPosts}
                  myInfo={myInfo}
                  setMyInfo={setMyInfo}
                  isLoggedIn={isLoggedIn}
                  username={username}
                />
              }
            />
            <Route
              path="/AddPosts"
              element={
                <AddPosts
                  username={username}
                  setPosts={setPosts}
                  posts={posts}
                />
              }
            />
          </Routes>
        ) : (
          <div>
            <Routes>
              <Route
                path="/Login"
                element={
                  <Login
                    username={username}
                    setuserName={setuserName}
                    password={password}
                    setPassword={setPassword}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                }
              />
              <Route
                path="/Posts"
                element={<Posts posts={posts} setPosts={setPosts} />}
              />

              <Route
                path="/Register"
                element={
                  <Register
                    username={username}
                    setuserName={setuserName}
                    password={password}
                    setPassword={setPassword}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                }
              />
            </Routes>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
