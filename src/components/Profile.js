import React, { useEffect } from "react";
import { getProfile } from "../api";

const Profile = ({ myInfo, setMyInfo }) => {
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      async function getMyInfo() {
        const myNewInfo = await getProfile(token);
        setMyInfo(myNewInfo);
      }
      getMyInfo();
    }
  }, []);

  return (
    <div id="messagesBox">
      {myInfo && myInfo.username ? (
        <h1 className="introTitle">hello {myInfo.username}!</h1>
      ) : (
        <h1 className="introTitle">welcome</h1>
      )}
      <h2 id="messagesTitle">messages</h2>
      {myInfo && myInfo.messages && myInfo.messages.length ? (
        myInfo.messages.map((message, index) => {
          return (
            <div key={`mymessagesmap: ${index}`}>
              {message.fromUser.username !== myInfo.username ? (
                <div id="myMessages">
                  <h3>from: {message.fromUser.username}</h3>
                  <h3>to: {message.post.title}</h3>
                  <p>message: {message.content}</p>
                </div>
              ) : null}
            </div>
          );
        })
      ) : (
        <div id="noMessages">no messages</div>
      )}
      <h2 id="messagesTitle">messages sent</h2>
      {myInfo && myInfo.messages && myInfo.messages.length ? (
        myInfo.messages.map((message, index) => {
          return (
            <div key={`mymessagesmap: ${index}`}>
              {message.fromUser.username === myInfo.username ? (
                <div id="myMessages">
                  <h3>from: you</h3>
                  <h3>to: {message.post.title}</h3>
                  <p>message: {message.content}</p>
                </div>
              ) : null}
            </div>
          );
        })
      ) : (
        <div id="noMessages">no messages</div>
      )}
    </div>
  );
};
export default Profile;
