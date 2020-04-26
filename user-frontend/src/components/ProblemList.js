import React  from 'react';
import ProblemDetail from './ProblemDetail'

export default function ProblemList(props){

  props.problems.sort(function(prob1, prob2){ // in-place sorting
    return (prob1.severity - prob2.severity); // sort ascending: highest severity (smallest number) first
  });

const problemList = () => {
    return props.problems.map(problem => {
      return( 
        <div key={problem._id}>
          <ProblemDetail targetgroupslug={props.slug} id={problem._id}/>
        </div>);
      })
  }

  return (
      <div>
          {problemList()}         
      </div>
    )
  
}
