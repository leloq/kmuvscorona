import React, { Component } from 'react';
import SolutionsList from './SolutionsList'
import axios from './../axiosInstance';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export default class SolutionsOverview extends Component {

  constructor(props) {
    super(props);
    this.state = {solutions: []};
  }

  componentDidMount() {
    axios.get('solutions/')
     .then(response => {
       this.setState({ solutions: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }

  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <Container maxWidth="sm" class="hero" >
          <Typography variant="h3" align="center" className="lg-mg-bottom">
          Alle unsere Lösungsansätze
        </Typography>
          <SolutionsList solutions={this.state.solutions}/>  
        </Container>      
      </div>
    )
  }
}