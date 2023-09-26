import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./header.css";
import "./blog.css";
import "./home.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
