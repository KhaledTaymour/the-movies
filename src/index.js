import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

root.render(
  <React.StrictMode>
    <HashRouter>
      {/* <Router> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      {/* </Router> */}
    </HashRouter>
    <App />
  </React.StrictMode>
);
