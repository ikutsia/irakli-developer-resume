/*import logo from "./logo.svg";*/
import React from "react";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import YourComponent from "../src/Components/YourComponent";
/*import { Link } from "react-router-dom";*/
import "./App.css";
import Navbar from "../src/Components/Navbar";
import Home from "../src/Components/Home";
import Resume from "../src/Components/Resume";
import Blog from "../src/Components/Blog";
import Contact from "../src/Components/Contact";
import SignIn from "../src/Components/SignIn";
import AdminDashboard from "../src/Components/AdminDashboard";
import ProtectedRoute from "../src/Components/ProtectedRoute";
import BabelConfig from "../src/babel.config";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <ProtectedRoute path="/admin" element={<AdminDashboard />} />
        <Route path="/your-component" element={<YourComponent />} />
        <Route path="babelconfig" element={<BabelConfig />} />
      </Routes>
    </div>
  );
};

export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
