import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Signup from "./Components/Signup";
import Login from "./Components/Login"; 
import Footer from "./Components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Signup /> 
  </React.StrictMode>
);
