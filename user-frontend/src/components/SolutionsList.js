import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SolutionsListPanel from './SolutionsListPanel'
import Grid from '@material-ui/core/Grid';



export default function SolutionsList(props){

const solutionsList = () => {
    return props.solutions.map(solution => {
      return( 
        <Grid item>
          <SolutionsListPanel title={solution.title} description={solution.description} id={solution._id}/>
        </Grid>);
      })
  }

  return (
      <div>
          <SolutionsListPanel title="Leo" description="Theo" id="5e75f7f8e9dc4a70b54bb923"/>
          {solutionsList()}         
      </div>
    )
  
}
