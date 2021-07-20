<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
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
=======
import "./App.css";
import Main from "./templates/Main";
import Error from "./templates/Error";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./templates/Header";
import Album from "./templates/Album";
import Tour from "./templates/Tour";
import Gallery from "./templates/Gallery";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/album" component={Album}></Route>
          <Route exact path="/tour" component={Tour}></Route>
          <Route exact path="/gallery" component={Gallery}></Route>
          <Route component={Error} />
        </Switch>
      </Router>
    </>
>>>>>>> 0ca76fa10de40906e343db98297cee5abb691255
  );
}

export default App;
