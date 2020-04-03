import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './components/NavBar'
import Home from './components/Home'
import Impressum from './components/Impressum'
import About from './components/About'
import Help from './components/Help' 
import Voting from './components/Voting'
import TargetGroupDetail from './components/TargetGroupDetail.js'
import SolutionsOverview from './components/SolutionsOverview.js'
import ContactImpressum from './components/ContactImpressum.js'
import NewSolutionForm from './components/NewSolutionForm.js'
import DataPrivacy from './components/DataPrivacy.js'

class App extends Component {
  render() {

    return (
    	<Router>
        	<div>
        	   <NavBar />
            	<Route path="/" exact component={Home} />
                <Route path="/targetgroup/:slug" component={TargetGroupDetail} />
                <Route path="/solutions" component={SolutionsOverview} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={ContactImpressum} />
                <Route path="/impressum" component={Impressum} />
                <Route path="/Voting" component={Voting} />
                <Route path="/NewSolution" component={NewSolutionForm} />
                <Route path="/DataPrivacy" component={DataPrivacy} />
                <Route path="/help" component={Help} />

        	</div>
    	</Router>

    )
  }
}
export default App