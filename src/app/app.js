import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar } from "../UI";
import { PostsInsert } from "../pages/PostsInsert";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/movies/create" exact component={PostsInsert} />
      </Switch>
    </Router>
  );
}

export default App;
