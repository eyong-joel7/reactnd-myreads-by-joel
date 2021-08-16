import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Search from './components/Search'
import './index.css'

ReactDOM.render(
  <Router>
    <Route path="/" exact render={() => <App />} />
    <Route path="/search" component={Search} />
  </Router>,
  document.getElementById("root")
);
