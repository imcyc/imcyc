import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Introduccion from './components/Introduccion';
import './App.css';

function App() {
  return (
    <HashRouter basename='/'>
      <Switch>
          <div className="App">
            <header className="App-header">
              <Route exact path="/" component={Home} />
              <Route exact path="/introduccion" component={Introduccion} />
            </header>
          </div>
      </Switch>
    </HashRouter>
  );
}

export default App;
