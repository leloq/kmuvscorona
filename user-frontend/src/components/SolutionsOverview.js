import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SolutionsList from './SolutionsList'
import Grid from '@material-ui/core/Grid';

export default class SolutionsOverview extends Component {

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

  render() {
    return (
      <div>
          <SolutionsList solutions={this.state.solutions}/>        
      </div>
    )
  }
}