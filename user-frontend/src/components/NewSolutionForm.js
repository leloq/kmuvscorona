import React, { Component } from 'react';
import axios from './../axiosInstance';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const styles = {
 paper: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: 1,
    backgroundColor: "secondary",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 3,
  },
  submit: {
    margin:  5
  },
};

export default withStyles(styles)(class NewSolution extends Component {

  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeProblem = this.onChangeProblem.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      description: '',
      problem: '',
      name: '',
      specificForTargetGroups: []
    }
  }

    onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

    onChangeProblem(e) {
    this.setState({
      problem: e.target.value
    })
  }


  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onSubmitDelete() {
    this.setState({
      title: ""
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      title: this.state.title,
      description: this.state.description,
      specificForTargetGroups: this.state.specificForTargetGroups,
    }

    this.setState({
      title: "",
      problem: "",
      description: "",
      name: ""

    })

    console.log(exercise);

    axios.post('solutions/', exercise)
      .then(res => console.log(res.data));

    //window.location = '/';
  }

  render() {
    const { classes } = this.props;
    return (

      <div>


      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Jetzt Lösungsvorschlag einreichen!
        </Typography>
        <form onSubmit={this.onSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="name"
                value={this.state.name}
                label="Dein Name"
                onChange={this.onChangeName}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                
                fullWidth
                id="problem"
                value={this.state.problem}
                label="Zu lösendes Problem"
                name="problem"
                autoComplete="lname"
                onChange={this.onChangeProblem}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="titel"
                value={this.state.title}
                label="Name deines Lösungsvorschlags"
                name="title"
                autoComplete="titel"
                onChange={this.onChangeTitle}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                multiline
                rows="4"
                fullWidth
                name="description"
                value={this.state.description}
                label="Beschreibung deines Lösungsvorschlags"
                id="description"
                autoComplete="description"
                onChange={this.onChangeDescription}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Einreichen!
          </Button>
          
        </form>
      </div>
      <Box mt={5}>
        
      </Box>
    </Container>


      
    </div>
    )
  }
})