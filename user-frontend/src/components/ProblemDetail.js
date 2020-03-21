import React, { Component } from 'react';
import axios from './../axiosInstance';
import { Link } from 'react-router-dom';
import SolutionsListPanel from './SolutionsListPanel'
import SolutionsList from './SolutionsList'
import Grid from '@material-ui/core/Grid';

export default class ProblemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      solutions: [],
    }
  }

  componentDidMount() {
    axios.get('problems/'+this.props.id)
      .then(response => {
        this.setState({
          title: response.data.title,
          description: response.data.description,
        })
        response.data.solutions.forEach((solution)=>{
          axios.get('http://localhost:5000/solutions/'+solution)
          .then(res => {
            this.setState( (state) => {
              return {
                ...state,
                solutions: [
                ...state.solutions, res.data]
              }
            })
          })
        })   
      })
      .catch(function (error) {
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
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <SolutionsList solutions={this.state.solutions}/>    
        
        <Link to="/">Back to Home</Link>
      </div>
    )
  }
}