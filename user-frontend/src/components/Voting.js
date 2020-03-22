import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
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
      likes: 0,
      dislikes: 0,
    }
  }



  increaseLikes = () => {
    this.setState(prevState => {
       return {likes: prevState.likes + 1}
    })
}

  increaseDislikes = () => {
    this.setState(prevState => {
       return {dislikes: prevState.dislikes + 1}
    })
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