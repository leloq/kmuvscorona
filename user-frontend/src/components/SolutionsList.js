import React from 'react';
import SolutionsListPanel from './SolutionsListPanel'
import Grid from '@material-ui/core/Grid';

export default function SolutionsList(props){

const solutionsList = () => {
    return props.solutions.map(solution => {
      return( 
        <Grid item>
          <SolutionsListPanel solution={solution}/>
        </Grid>);
      })
  }

  return (
      <div>
          {solutionsList()}         
      </div>
    )
  
}
