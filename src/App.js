import React, { Component } from 'react'
// use HashRouter instead of BrowserRouter since there is no backend to support paths other than /
import { HashRouter } from 'react-router-dom'
import { Redirect, Route, Switch } from 'react-router'
import './App.css'

import EventPage from './routes/EventPage'

import Events from './components/Events'

class App extends Component {
  render() {
    return (
      <div className="App theme-dark">
        <HashRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                <Events source="https://cors-anywhere.herokuapp.com/https://fe-api.smarkets.com/v0/events/popular/" />
              }
            />
            <Route path="/events/:id/" component={EventPage} />
            <Redirect to="/" />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
