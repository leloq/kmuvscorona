import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import axios from './../axiosInstance';
import Typography from '@material-ui/core/Typography';
import { green, red } from '@material-ui/core/colors';

const styles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  }

});

export default withStyles(styles)(class ProblemDetail extends Component {

 constructor(props) {
    super(props);
    this.state = {
      likes: this.checkUpvotes(),
      dislikes: this.checkDownvotes()
    }
  }

   checkUpvotes = () => {
    console.log(this.props.solution)
    if(typeof this.props.solution === "undefined" || this.props.solution.upVotes === "undefined"){
      return 0;
    }
    else {
      return this.props.solution.upVotes ;
    }
  }

   checkDownvotes = () => {
    if(typeof this.props.solution === "undefined" || typeof this.props.solution.downVotes === "undefined"){
      return 0;
    }
    else {
      return this.props.solution.downVotes ;
    }
  }

  increaseLikes = () => {
      axios.post('solutions/update/'+this.props.solution._id, {
      ...this.props.solution, 
      upVotes: this.state.likes+1
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });

    this.setState(prevState => {
       return {likes: prevState.likes + 1}
    })
}

  increaseDislikes = () => {
      axios.post('solutions/update/'+this.props.solution._id, {
      ...this.props.solution, 
      downVotes: this.state.dislikes+1
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });

    this.setState(prevState => {
       return {dislikes: prevState.dislikes + 1}
    }
    )
}

render(){
const { classes } = this.props;
return(
  <div className={classes.root}>
    <Fab  aria-label="like" justify="center">
        <ThumbUpAltIcon onClick={this.increaseLikes.bind(this)} style={{ color: green[500] }}/>
      </Fab>
           <Fab aria-label="like" justify="center">
        <ThumbDownIcon onClick={this.increaseDislikes.bind(this)} style={{ color: red[500] }} />
      </Fab>
      <Typography variant="overline" display="block" gutterBottom>
          {this.state.likes} Gefällts, {this.state.dislikes} Gefällts Nicht. 
    </Typography>
       
    </div>
  )
}

})