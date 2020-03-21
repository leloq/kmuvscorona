import React, { Component } from 'react';
import axios from './../axiosInstance';
import { withStyles, Grid, Typography } from '@material-ui/core/';
import ProblemList from './ProblemList';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  imageContainer: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    minHeight: '25rem',
    opacity: 0.8,
    padding: '0 15rem',
  },
  bigHeadingWrapper: {
    marginTop: '10rem',
  },
  heading: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    color: '#fff',
    padding: '0.25rem',
  },
  smallHeadingWrapper: {
    marginTop: '1rem',
  }
};

class TargetGroupDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupname: '',
      imageUrl: '',
      description: '',
      problems: [],
    }
  }

  componentDidMount() {
    axios.get('targetGroups/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          groupname: response.data.groupname,
          
          imageUrl: response.data.imageUrl,
          description: response.data.description
        })
        response.data.problems.forEach((problemid)=>{
          axios.get('problems/'+problemid)
          .then(res => {
            this.setState( (state) => {
              return {
                ...state,
                problems: [
                ...state.problems, res.data]
              }
            })
          })
        })    
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  descriptionHeader() {
    return (
      <div style={{backgroundImage: `url(${this.state.imageUrl})`}} className={this.props.classes.imageContainer}>
          <Grid container justify="center" direction="column">
            <Grid item>
              <div className={this.props.classes.bigHeadingWrapper}>
                <Typography component="span" className={this.props.classes.heading} variant="h3">{this.state.groupname}</Typography>
              </div>
              <div className={this.props.classes.smallHeadingWrapper}>
                <Typography className={this.props.classes.heading} component="span" variant="h4">{this.state.description}</Typography>
              </div>
            </Grid>
          </Grid>
      </div>
      );
  }

  render() {
    return (
      <div className={this.props.classes.root}>
         { this.descriptionHeader() }
         <div><ProblemList problems={this.state.problems}/>  </div>
      </div>
    );
  }
}

export default withStyles(styles)(TargetGroupDetail);
