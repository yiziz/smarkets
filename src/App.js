import React, { Component } from 'react'
// use HashRouter instead of BrowserRouter since there is no backend to support paths other than /
import { HashRouter } from 'react-router-dom'
import { Redirect, Route, Switch } from 'react-router'
import './App.css'

import EventPage from './routes/EventPage'

import Events from './components/Events'

// So this can be viewed through github pages
const path = process.env.NODE_ENV === 'production' ? '/smarkets' : ''

class App extends Component {
  render() {
    return (
      <div className="App theme-dark">
        <HashRouter>
          <Switch>
            <Route
              exact
              path={`${path}/`}
              render={() =>
                <Events source="https://fe-api.smarkets.com/v0/events/popular/" />
              }
            />
            <Route path={`${path}/events/:id/`} component={EventPage} />
            <Redirect to={`${path}/`} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
