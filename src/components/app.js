import React from "react";

const App = () => {
  return (
    <div>
      <h1>Strangers Things</h1>

      <form>
        <label>User Name</label>
        <input id="username" defaultValue="Username Here"></input>
        <label>Password</label>
        <input id="password" defaultValue="Password Here"></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default App;
