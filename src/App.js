//import React from "react";
import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProjectList from "./components/projectList";
import ProfileList from "./components/profileList";
import Home from "./components/home";
import Project from "./components/project";
import Profile from "./components/profile";

class App extends Component {
  state = {
    color: "#C0C0C0",
  };
  componentDidMount() {
    document.body.style.backgroundColor = "	#C0C0C0";
  }
  render() {
    return (
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/projects" component={ProjectList}></Route>
          <Route path="/profiles" component={ProfileList}></Route>
          <Route path="/project/:id" exact component={Project}></Route>
          <Route path="/profile/:id" exact component={Profile}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

/*
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/projects" component={ProjectList}></Route>
        <Route path="/profiles" component={ProfileList}></Route>
        <Route path="/project/:id" exact component={Project}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
*/
