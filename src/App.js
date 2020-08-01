import React, { Component } from 'react';
import './App.css';
import Calendar from "./components/Calendar.js";
import Agenda from "./components/Agenda";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
      <div className="App">
      <h1>Calendar Scheduler App</h1>
        <Route exact path="/" component={Calendar} />
        <Route exact path="agenda" component={Agenda} />
      </div>
      </Switch>
      </Router>
    );
  }
}

export default App;
