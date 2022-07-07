import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { App } from "./components";

const root = ReactDOM.createRoot(document.getElementById("App"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
