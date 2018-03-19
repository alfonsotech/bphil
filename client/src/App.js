import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import Paths from "./pages/Paths";
import Tribes from "./pages/Tribes";
import Submit from "./pages/Submit";
import Edit from "./pages/Edit";
import Footer from './components/Footer'
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/topics" component={Topics} />
        <Route exact path="/paths" component={Paths} />
        <Route exact path="/tribes" component={Tribes} />
        <Route exact path="/submit" component={Submit} />
        <Route exact path="/edit" component={Edit} />

      </Switch>
      <Footer />
    </div>
  </Router>;

export default App;
