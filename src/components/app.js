import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log("submitting", username, password);
        setPassword("");
        setUsername("");
      }}
    >
      <label>
        User Name
        <input
          name="username"
          type="text"
          value="{username}"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
