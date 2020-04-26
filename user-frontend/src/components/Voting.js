import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import axios from './../axiosInstance';
import Typography from '@material-ui/core/Typography';
import { green, red } from '@material-ui/core/colors';
import Cookies from 'universal-cookie';

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

const cookies = new Cookies();

export default withStyles(styles)(class ProblemDetail extends Component {

 constructor(props) {
    super(props);
    this.state = {
      likes: this.checkUpvotes(),
      dislikes: this.checkDownvotes()
    }
  }

   checkUpvotes = () => {
    if(typeof this.props.solution === "undefined" || typeof this.props.solution.upVotes === "undefined"){
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

    console.log('Increase likes cookie: ' + cookies.get(this.props.solution._id))

    if (typeof cookies.get(this.props.solution._id) == "undefined") {

      axios.post('solutions/vote/'+this.props.solution._id, {
        upVotes: this.state.likes+1,
        downVotes: this.state.dislikes
      })
      
      .then(response => {
        console.log(response);
      })
      
      .catch(error => {
        console.log(error);
      });

    cookies.set(this.props.solution._id,true, {path: "/"});

    this.setState(prevState => {
       return {likes: prevState.likes + 1}
    })
    }
}

  increaseDislikes = () => {

    console.log('Decrease like cookie: ' + cookies.get(this.props.solution._id))
    if (typeof cookies.get(this.props.solution._id) == "undefined") {
      axios.post('solutions/vote/'+this.props.solution._id, {
        upVotes: this.state.likes,
        downVotes: this.state.dislikes+1
      })
      
      .then(response => {
        console.log(response);
      })
      
      .catch(error => {
        console.log(error);
      });

      cookies.set(this.props.solution._id,true, {path: "/"});

      this.setState(prevState => {
       return {dislikes: prevState.dislikes + 1}
      })
  }
}

render(){
const { classes } = this.props;
return(
  <div className={classes.root}>
    <Fab  aria-label="like" onClick={this.increaseLikes.bind(this)} justify="center">
        <ThumbUpAltIcon style={{ color: green[500] }}/>
      </Fab>
           <Fab aria-label="like" onClick={this.increaseDislikes.bind(this)} justify="center">
        <ThumbDownIcon  style={{ color: red[500] }} />
      </Fab>
      <Typography variant="overline" display="block" gutterBottom>
          {this.state.likes} Gefällts, {this.state.dislikes} Gefällts Nicht. 
    </Typography>
       
    </div>
  )
}

})