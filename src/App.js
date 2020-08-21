import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './trivia.png';
import './App.css';
import Login from './components/Login';
import Game from './components/Game';
import Settings from './components/Settings';
import Feedback from './components/FeedBack';
import Ranking from './components/Ranking';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="Main-site">
        <Switch>
          <Route path="/feedback" component={Feedback} />
          <Route path="/ranking" component={Ranking} />
          <Route path="/game" component={Game} />
          <Route path="/settings" component={Settings} />
          <Route exact path="/" component={Login} />
        </Switch>
      </section>
    </div>
  );
}
