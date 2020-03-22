import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './components/NavBar'
import Home from './components/Home'
import Impressum from './components/Impressum'
import About from './components/About'
import Voting from './components/Voting'
import TargetGroupDetail from './components/TargetGroupDetail.js'
import SolutionsOverview from './components/SolutionsOverview.js'
import ContactImpressum from './components/ContactImpressum.js'
import NewSolutionForm from './components/NewSolutionForm.js'

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
                <Route path="/contact" component={ContactImpressum} />
                <Route path="/impressum" component={Impressum} />
                <Route path="/Voting" component={Voting} />
                <Route path="/NewSolution" component={NewSolutionForm} />
        	</div>
    	</Router>

    )
  }
}
export default App