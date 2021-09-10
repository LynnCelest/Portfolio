import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.js";
import Home from "./components/home.js"
import Projects from "./components/projects.js"
import Blogs from "./components/blogs.js"
import About from "./components/about.js"

function App() {
  return (
    <Router>
        <Navbar />
        <br/>
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/blogs" exact component={Blogs} />
        <Route path="/about" exact component={About} />
    </Router>
  );
}

export default App;

//Sample for Future Reference
//  <Route path="/projects/create" exact component={CreateProject}>
//  <Route path="/projects/edit:id" exact component={EditProject}>
//  <Route path="/blog/create" exact component={CreateBlog}>
//  <Route path="/blog/edit:id" exact component={EditBlog}>

//Create React App Sample
{/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Don't touch <code>src/App.js</code> and load to desave.
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
</div> */}