import React, { Component } from 'react';
import axios from './../axiosInstance';
import SolutionsListPanel from './SolutionsListPanel'
import SolutionsList from './SolutionsList'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
  root: {
    paddingTop: "25px",
    paddingBottom : "25px"
  },
  down: {
    paddingBottom : "25px"
  }

});

export default withStyles(styles)(class ProblemDetail extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.targetgroupid)
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
          axios.get('solutions/'+solution)
          .then(res => {
            if(this.checkIfSpecific(res.data)){
              this.setState( (state) => {
                return {
                  ...state,
                  solutions: [
                  ...state.solutions, res.data]
              }
            })
            }
           
          })
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }

 checkIfSpecific (solution)  {
    return (solution.specificForTargetGroups.length === 0) 
    || (typeof solution.specificForTargetGroups.find(tgroup => tgroup === this.props.targetgroupid) !== "undefined");
}


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h5">{this.state.title}</Typography>
        <Typography className={classes.down}>{this.state.description}</Typography>
        <SolutionsList solutions={this.state.solutions}/>    
        
        
      </div>
    )
  }
})