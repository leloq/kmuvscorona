import React, { Component } from 'react';
import axios from './../axiosInstance';
import TargetGroupCard from './TargetGroupCard'
import Grid from '@material-ui/core/Grid';

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.state = {targetgroups: []};
}

componentDidMount() {
  axios.get('targetGroups/')
   .then(response => {
     this.setState({ targetgroups: response.data });
   })
   .catch((error) => {
      console.log(error);
   })
}


exerciseList() {
  return this.state.targetgroups.map(currenttargetgroup => {
    return( 
    <Grid item>
    <TargetGroupCard description={currenttargetgroup.description} groupname={currenttargetgroup.groupname} slug={currenttargetgroup.slug} url={currenttargetgroup.imageUrl} id={currenttargetgroup._id}/>
    </Grid>);
  })
}

  render() {
    return (
        <div>
        <Grid container spacing={5} justify="center">
        { this.exerciseList() }
                
              </Grid>


        
  </div>
    )
  }
}