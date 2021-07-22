import "./App.css";
import Main from "./templates/Main";
import Error from "./templates/Error";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./templates/Header";
import Album from "./templates/Album";
import Tour from "./templates/Tour";
import Galery from "./templates/Galery";
import styled from "styled-components"


function App() {
  return (
    <>
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/album" component={Album}></Route>
          <Route exact path="/tour" component={Tour}></Route>
          <Route exact path="/galery" component={Galery}></Route>
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
