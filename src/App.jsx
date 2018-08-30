import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Home from './components/Home/Home'
import About from './components/About/About'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseUrl: 'http://localhost/flashphp/public/backend'
    }
  }

  render() {
    return (
      <Router>
          <div>
            <Route exact path='/' render={ props => <Home {...this.state} />} />
            <Route exact path='/about' render={props => <About {...this.state} />} />
          </div>
      </Router>
    );
  }
}

export default App;
