import React, { Component } from 'react';
import SolutionsList from './SolutionsList'
import axios from './../axiosInstance';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

export default class SolutionsOverview extends Component {

  constructor(props) {
    super(props);
    this.state = {solutions: []};
  }

  componentDidMount() {
    axios.get('solutions/')
     .then(response => {
       const filteredSolutions = response.data.filter(solution =>  typeof solution.preliminary === "undefined" || solution.preliminary === false)
       this.setState({ solutions: filteredSolutions });
     })
     .catch((error) => {
        console.log(error);
     })
  }

  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <Container maxWidth="sm" class="hero" >
          <Typography variant="h3" align="center" className="lg-mg-bottom" gutterBottom>
            All unsere Lösungsansätze
          </Typography>

          <Typography gutterBottom>
            Auf dieser Seite finden Sie alle Lösungsvorschläge unabhängig von den relevanten Zielgruppen und Lösungen zusammengefasst. In die Detailansicht der für Ihre Zielgruppe relevanten Lösungsansätze gelangen Sie durch das Klicken auf den entsprechenden Button auf der Startseite.
          </Typography>

          <SolutionsList solutions={this.state.solutions}/>  
        </Container>      
      </div>
    )
  }
}