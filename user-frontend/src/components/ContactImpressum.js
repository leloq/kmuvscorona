import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import {  FormControl, InputLabel, Input, Button, TextField} from "@material-ui/core";
import Popup from "reactjs-popup";
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import green from '@material-ui/core/colors/green';

export default class FeedbackForm extends Component {

  constructor(props) {
  super(props);
    this.state = {
      open: false,
      name: '',
      email: '',
      message: '',
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  sendAndGiveFeedback(event) {
    this.openModal();
    this.handleSubmit(event);
  }

  openModal() {
    this.setState({ open: true});
  }

  closeModal() {
    this.setState({ open: false});
    window.location = '/contact';
  }

  onNameChange(event) {
    console.log("Update Name");
    this.setState({name: event.target.value})
  }

  onMailChange(event) {
    console.log("Update Mail");
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    console.log("Update Message");
    this.setState({message: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = process.env.REACT_APP_EMAILUSER;
    this.sendFeedback(
      this.state.name,
      this.state.email,
      this.state.message,
      user
    );
  }

  sendFeedback(senderName, senderEmail, feedback, user) { // info@kmuvscorona.de
    window.emailjs.send("default_service", "contact_form", {"message_html":feedback,
    "senderMail":senderEmail, "from_name":senderName, "recipientMail":'lennart2912@gmail.com'}, user)
      .then(res => {
        console.log("E Mail Sent successfully");
      })
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }

  render() {
    return (
       <div>        
        <div style={{display: "flex", justifyContent: 'center', margin:5, padding: 20}} >
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

            <Button className="button" variant="contained" color="primary" size="medium" onClick={this.sendAndGiveFeedback.bind(this)}>
              Send 
            </Button>
            <Popup open={this.state.open}
            closeOnDocumentClick
            onClose={this.closeModal}>
              <Typography style={{color: green[500], marginBottom:"20px"}}> <DoneRoundedIcon fontSize='large' style={{ color: green[500] }}/> Email successfully sent.</Typography>
          </Popup>
        </form>
      </div>
          <Button variant="outlined" color="primary" style={{padding:15, marginLeft:(window.innerWidth/2.15) }}>
            <Link to="/impressum" style={{textDecoration: 'none'}}>
            Impressum
            </Link>
          </Button>
    </div>
    );
  }
}