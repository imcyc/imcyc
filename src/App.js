import React from 'react';
import { HashRouter, BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Introduccion from './components/Introduccion';
import './App.css';

function App() {
  return (
    <HashRouter basename='http://www.imcyc.com/apps'>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <header className="App-header">
            <Route exact path="/" component={Home} />
            <Route exact path="/introduccion" component={Introduccion} />
          </header>
        </div>
      </Router>
    </HashRouter>
  );
}

export default App;
