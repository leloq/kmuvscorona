import React from 'react';
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
          
          {solutionsList()}         
      </div>
    )
  
}
