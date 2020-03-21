import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SolutionsListPanel from './SolutionsListPanel'
import Grid from '@material-ui/core/Grid';


export default class SolutionsList extends Component {

  constructor(props) {
    super(props);
    this.state = {solutions: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/solutions/')
     .then(response => {
       this.setState({ solutions: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }


  solutionsList() {
    return this.state.solutions.map(solution => {
      return( 
        <Grid item>
          <SolutionsListPanel title={solution.title} description={solution.description} id={solution._id}/>
        </Grid>);
      })
  }

  render() {
    return (
      <div>
          { this.solutionsList() }         
      </div>
    )
  }
}