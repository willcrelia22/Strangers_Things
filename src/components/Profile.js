import React, { useEffect } from "react";
import { getProfile } from "../api";

const Profile = ({ myInfo, setMyInfo }) => {
  
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token){
      async function getMyInfo() {
        const myNewInfo = await getProfile(token);
        console.log(myNewInfo, "mynewinfo")
        setMyInfo(myNewInfo);
      }
      getMyInfo();
    }
   
  }, []);

  return (
    <div>
      {myInfo && myInfo.username ? (
        <h1>Welcome {myInfo.username}</h1>
      ) : (
        <h1>Welcome</h1>
      )}
      <h2>Messages to Me:</h2>
      {myInfo && myInfo.messages && myInfo.messages.length ? (
        myInfo.messages.map((message, index) => {
          return <div key={`mymessagesmap: ${index}`}>{message}</div>
        })
      ) : (
        <div>you have no messages at this time</div>
      )}
      
    </div>
  );
};
export default Profile;