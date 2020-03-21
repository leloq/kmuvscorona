import React  from 'react';
import ProblemDetail from './ProblemDetail'

export default function ProblemList(props){

const problemList = () => {
    return props.problems.map(problem => {
      return( 
        <div>
          <ProblemDetail id={problem._id}/>
        </div>);
      })
  }

  return (
      <div>
          {problemList()}         
      </div>
    )
  
}
