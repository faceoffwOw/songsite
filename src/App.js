import "./App.css";
import Main from "./templates/Main";
import Error from "./templates/Error";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./templates/Header";
import Album from "./templates/Album";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/album" component={Album}></Route>
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
