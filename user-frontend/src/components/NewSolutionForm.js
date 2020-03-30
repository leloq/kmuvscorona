import React, { Component } from 'react';
import axios from './../axiosInstance';
import Snackbar from './FormSnackbar';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Autocomplete } from '@material-ui/lab';
import { withSnackbar } from 'notistack';


const styles = {
 paper: {
    marginTop: 80,
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
    marginTop: 10,
  },
  submit: {
    margin:  5
  },
};


export default withSnackbar( withStyles(styles)(class NewSolution extends Component {

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
      name: '',
      specificForTargetGroups: [],
      problems: [],
      problemId: ''
    }
  }

  componentDidMount() {
    axios.get('problems/')
     .then(response => {
       this.setState({ problems: response.data });
       console.log(response.data);
     })
     .catch((error) => {
        console.log(error);
     })
  }

    onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

    onChangeProblem(event, value) {
      this.setState({
        problemId: (value ? value._id : null)
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
    const user = process.env.REACT_APP_EMAILUSER;

    const solution = {
      title: this.state.title,
      description: this.state.description,
      specificForTargetGroups: this.state.specificForTargetGroups,
      problemId: this.state.problemId,
      preliminary: true,
    }

    this.sendFeedback(
      this.state.title,
      this.state.name,
      this.state.problemId,
      this.state.description,
      user
    );

    this.setState({
      title: "",
      problemId: "",
      description: "",
      name: "",
    })

    axios.post('solutions/add', solution)
      .then(res => {
        this.props.enqueueSnackbar('Vielen Dank! Ihre Eingabe wurde registriert und erscheint an der entsprechenden Stelle, sobald sie von einem Administrator freigeschalten wurde.', {variant:"success"});
        console.log(res.data)
      })
      .catch((error) => {
        this.props.enqueueSnackbar('Mist, mit der Eingabe hat wohl etwas nicht geklappt.', {variant:"error"});
      console.log(error);
   });
  }

  sendFeedback(title, senderName, problemID, description, user) { // info@kmuvscorona.de
    window.emailjs.send("default_service", "template_rrFRhJqM", {"message_html":description,
    "title":title, "from_name":senderName, "problem_id":problemID,
    "recipientMail":'semmelmann.leo@gmail.com'}, user)
      .then(res => {
        console.log("E Mail Sent successfully");
      })
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }

  render() {
    const { classes } = this.props;

    return (
      <div>

      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Jetzt Lösungsvorschlag einreichen!
        </Typography>
        <form onSubmit={this.onSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
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
            <Grid item xs={12}>
                <Autocomplete
                    id="problems"
                    onChange={this.onChangeProblem}
                    options={this.state.problems}
                    getOptionLabel={problem => problem.title}
                    renderInput={params => <TextField {...params}
                    label="Welches Problem wird dadurch gelöst?"
                    variant="outlined"
                    />}
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
}))


