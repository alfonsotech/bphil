import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Topics from "./pages/Topics"
import PathsPage from "./pages/PathsPage"
import Tribes from "./pages/Tribes"
import Submit from "./pages/Submit"
import Edit from "./pages/Edit"
import Footer from './components/Footer'
import Navigation from "./components/Navigation"
import NoMatch from "./pages/NoMatch"

const App = () =>
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/topics" component={Topics} />
        <Route exact path="/paths" component={PathsPage} />
        <Route exact path="/tribes" component={Tribes} />
        <Route exact path="/submit" component={Submit} />
        <Route exact path="/edit" component={Edit} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>

export default App
