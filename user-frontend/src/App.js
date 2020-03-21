import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import TargetGroupDetail from './components/TargetGroupDetail.js'
import SolutionsOverview from './components/SolutionsOverview.js'

class App extends Component {
  render() {

    return (
    	<Router>
    	<div>
    	<NavBar />
    	<Route path="/" exact component={Home} />
        <Route path="/targetgroup/:id" component={TargetGroupDetail} />
        <Route path="/solutions" component={SolutionsOverview} />
        <Route path="/about" component={About} />
    	</div>
    	</Router>

    )
  }
}
export default App