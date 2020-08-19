import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './trivia.png';
import './App.css';
import Login from './components/Login';
import Game from './components/Game';
import Settings from './components/Settings';


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route path="/game" component={Game} />
          <Route path="/settings" component={Settings} />
          <Route exact path="/" component={Login} />
        </Switch>
      </header>
    </div>
  );
}
