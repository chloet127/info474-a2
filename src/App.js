import React from "react";
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import './style/style.css'

import Assignment2 from './Assignment2';
import Assignment3 from './Assignment3';
import Final from './Final';

const App = () => {

  return (
    <div className='App'>
      <header>
        <NavigationBar />
      </header>

      <main>
        <div>
          <Switch>
            <Route exact path="/info474-project"> <Final /> </Route>
            <Route path="/info474-project/assignment3"> <Assignment3 /> </Route>
            <Route path="/info474-project/assignment2"> <Assignment2 /> </Route>
            <Redirect to="/info474-project" />
          </Switch>
        </div>
      </main>

    </div>
  );
}

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/info474-project">
          INFO 474
        </NavLink>
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/info474-project/assignment2" >Assignment 2</NavLink>
          <NavLink className="nav-link" to="/info474-project/assignment3" >Assignment 3</NavLink>
          <NavLink className="nav-link" exact to="/info474-project" >Final Project</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default App;
