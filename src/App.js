import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// For this demo, we are using the UMD build of react-router-dom
import {Switch,Route,Link} from 'react-router-dom';

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = (props) => (
  <h2>This is Roster</h2>
)

const Schedule = (props) => (
  <div>
    <ul>
      <li>6/5 @ Evergreens</li>
      <li>6/8 vs Kickers</li>
      <li>6/14 @ United</li>
    </ul>
  </div>
)

const Home = (props) => (
  <div>
    <h1>Welcome to the Tornadoes Website!</h1>
  </div>
)

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
      <Route exact path='/' component={Home}/>
    </Switch>
  </main>
)

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
      </ul>
    </nav>
  </header>
)

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);


export default App;
