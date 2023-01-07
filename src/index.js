import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { HashRouter } from "react-router-dom";

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

root.render(
  <React.StrictMode>
    {/* <HashRouter> */}
    <App />
    {/* </HashRouter> */}
  </React.StrictMode>
);
