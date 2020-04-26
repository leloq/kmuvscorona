import React from 'react';
import SolutionsListPanel from './SolutionsListPanel'
import Grid from '@material-ui/core/Grid';


export default function SolutionsList(props){

const sortedSolutions = props.solutions.slice().sort(function(sol1, sol2){ // use slice() to sort COPY of array
  var sol1VoteBalance = sol1.upVotes - sol1.downVotes;
  var sol2VoteBalance = sol2.upVotes - sol2.downVotes;
  return (sol2VoteBalance - sol1VoteBalance); // sort descending: most popular first
});

const solutionsList = () => {
    return sortedSolutions.map(solution => {
      return( 
        <Grid item key={solution._id}>
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
