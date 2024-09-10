import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Signup from "./Components/Signup";
import Login from "./Components/Login"; 
import UserDashboard from "./Components/UserDashboard";
import FileManagement from "./Components/FileManagement.js";
import AccountManagement from "./Components/AccountManagement.js";
import AdminDashboard from "./Components/AdminDashboard.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
