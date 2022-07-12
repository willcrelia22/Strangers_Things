import React, { useState } from "react";
import { createMessage } from "../api";

function NewMessage({post}) {
  const [typedMessage, setTypedMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const postID = post._id;
    const token = localStorage.getItem("token");
    const myMessage = await createMessage(token, postID, typedMessage);
    setTypedMessage("");
    if (myMessage) {
      return alert("message sent");
    }
  };

  return (
    <aside>
      <form onSubmit={handleSubmit}>
        <input
          id="messageUserBox"
          onChange={(event) => {
            setTypedMessage(event.target.value);
          }}
          type="text"
          value={typedMessage}
          required
        />
        <button id="messageButton" type="submit">
          send message
        </button>
      </form>
    </aside>
  );
}

export default NewMessage;
