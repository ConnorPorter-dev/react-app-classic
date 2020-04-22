import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./home";
import About from "./about";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
