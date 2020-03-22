import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import {  FormControl, InputLabel, Input, Button, TextField} from "@material-ui/core";

export default class FeedbackForm extends Component {
  constructor(props) {
  super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onMailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }


  handleSubmit(event) {
    event.preventDefault();
    
    this.sendFeedback(
      this.state.name,
      this.state.email,
      this.state.message
    );
  }

 // Note: this is using default_service, which will map to whatever
 // default email provider you've set in your EmailJS account.
  sendFeedback(senderName, senderEmail, feedback) {

    window.emailjs.send("gmail", "contact_form", {"message_html":feedback,
    "senderMail":senderEmail, "from_name":senderName, "recipientMail":"info@kmuvscorona.de"})
      .then(res => {
        console.log("E Mail Sent successfully")
      })
      // Handle errors here however you like
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }

  render() {
    return (
       <div>
          <Button variant="outlined" color="primary" style= {{ margin:10, padding:10}}>
            <Link to="/impressum" style={{ textDecoration: 'none'}}>
            Impressum
            </Link>
          </Button>
        
        <div style={{display: "flex", justifyContent: 'center', margin:20, padding: 20}} >
        <form style={{ width: "70%", align: "center"}} className='feedback-form'>
          <Typography variant='h3' style={{margin:20}} >Kontaktieren Sie uns:</Typography>

            <FormControl margin="normal" fullWidth onChange={this.onNameChange.bind(this)} >
                <InputLabel htmlFor="name"> Name </InputLabel>
                <Input id="name" type="text" />
              </FormControl>

              <FormControl margin="normal" fullWidth onChange={this.onMailChange.bind(this)} >
                <InputLabel htmlFor="email"> Email </InputLabel>
                <Input id="email" type="email"/>
              </FormControl>

            <FormControl margin="normal" fullWidth onChange={this.onMessageChange.bind(this)} >
              <InputLabel htmlFor="message"> Message </InputLabel>
              <Input id="message" multiline rows={10} />
            </FormControl>

          <Button variant="contained" color="primary" size="medium" onClick={this.handleSubmit.bind(this)} >
            Send
          </Button>
        </form>
      </div>
    </div>
    );
  }
}