import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search'

const App = () => {
  return <Router>
    <Switch>
      <Route path="/"  exact component={Home} />
      <Route path="/search"  exact component={Search} />
    </Switch>
  </Router>
}

export default App
