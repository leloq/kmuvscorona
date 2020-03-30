import React, { Component } from 'react';
import axios from './../axiosInstance';
import { withStyles, Grid, Typography } from '@material-ui/core/';
import ProblemList from './ProblemList';
import Button from '@material-ui/core/Button';
import {InlineShareButtons} from 'sharethis-reactjs';

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
         <div><ProblemList targetgroupid={this.props.match.params.id} problems={this.state.problems}/>  </div>
          
          <div> 
            <InlineShareButtons
              config={{
                alignment: 'center',  // alignment of buttons (left, center, right)
                color: 'social',      // set the color of buttons (social, white)
                enabled: true,        // show/hide buttons (true, false)
                font_size: 16,        // font size for the buttons
                labels: 'cta',        // button labels (cta, counts, null)
                language: 'en',       // which language to use (see LANGUAGES)
                networks: [           // which networks to include (see SHARING NETWORKS)
                  'whatsapp',
                  'linkedin',
                  'facebook',
                  'twitter',
                  'email'
                ],
                padding: 14,          // padding within buttons (INTEGER)
                radius: 5,            // the corner radius on each button (INTEGER)
                size: 35,             // the size of each button (INTEGER)

                // OPTIONAL PARAMETERS
                url: 'https://www.kmuvscorona.de', // (defaults to current url)
                // image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
                description: 'KMU versus Corona',       // (defaults to og:description or twitter:description)
                title: 'KMU versus Corona',            // (defaults to og:title or twitter:title)
                message: 'Ich habe hier etwas gefunden, dass dir behilflich sein kann: \n https://www.kmuvscorona.de \n',     // (only for email sharing)
                subject: 'KMU versus Corona Hilfeseite',  // (only for email sharing)
                // username: 'custom twitter handle' // (only for twitter sharing)
              }}
            />
          </div>

      </div>
    );
  }
}

export default withStyles(styles)(TargetGroupDetail);
