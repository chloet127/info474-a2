import React from "react";
import { useFetch } from "./hooks/useFetch";
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import './style/style.css'

import Assignment2 from './Assignment2';
import Assignment3 from './Assignment3';

const App = () => {
  // const [data, loading] = useFetch(
  //     "https://raw.githubusercontent.com/rfordatascience/tidytuesday/master/data/2020/2020-01-21/spotify_songs.csv"
  // );

  return (
    <div className='App'>
      <header>
        <NavigationBar />
      </header>
      
      <main>
        <div>
          <Switch>
            <Route exact path="/"> <Assignment2 /> </Route>
            <Route path="/assignment3"> <Assignment3 /> </Route>
            <Redirect to="/" />
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
        <NavLink className="navbar-brand" to="/">
          INFO 474 
        </NavLink>
        <div className="navbar-nav">
          <NavLink className="nav-link" exact to="/" >Assignment 2</NavLink>
          <NavLink className="nav-link" to="/assignment3" >Assignment 3</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default App;
