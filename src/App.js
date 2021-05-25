import React from "react";
import "./App.css";
import Main from "./containers/Main";
import Blogs from "./containers/blogs/Blogs";
import index from "./containers/courses/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyCourse from "./containers/mycourses/mycourses";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/myblog" component={Blogs}></Route>
        <Route exact path="/course" component={MyCourse}></Route>
        <Route exact path="/mycourse/:indexofcourse" component={index}></Route>
      </Router>
    </div>
  );
}

export default App;
