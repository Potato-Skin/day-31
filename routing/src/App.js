import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import {Link,  Switch, Route} from 'react-router-dom'
import { Route, Link, Switch } from "react-router-dom";

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h1>This is the about page</h1>
    </div>
  );
}

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h1>My portfolio</h1>
      </Link>

      <Link to="/about">About</Link>
      <br />
      <Link to="/users">Users List</Link>
    </nav>
  );
}

function AboutServices() {
  return <div>These are the services</div>;
}

function Users() {
  return <div>This will have a list of users</div>;
}

function UsersAdd() {
  return <div>You can search for users to add them</div>;
}

function MufasaUsers() {
  return <div>All of the mufasas</div>;
}

function GoHomeYoureDrunk() {
  return <div>40Beer Beer not found. Go Home</div>;
}

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/about/services" component={AboutServices} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/users/add" component={UsersAdd} />
        <Route exact path="/users/:mufasa" component={MufasaUsers} />
        <Route component={GoHomeYoureDrunk} />
      </Switch>
    </div>
  );
}

export default App;
