import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ListPage from './ListPage.js';
import Header from './Header.js';
import DetailPage from './DetailPage.js';
import CreatePage from './CreatePage.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/characters"
              exact
              component={ListPage}
            />
            <Route
              path="/characters/:characterId"
              exact
              component={DetailPage}
            />
            <Route
              path="/create"
              exact
              component={CreatePage}
            />
          </Switch>
        </Router>
        <footer>
          Contact info goes here
                </footer>
      </div>
    )
  }
}