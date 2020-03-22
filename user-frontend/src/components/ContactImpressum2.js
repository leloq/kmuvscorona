import React from "react";
import { Link } from 'react-router-dom';

import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField
} from "@material-ui/core";

export default class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = { message: '', name: 'Name', email: 'email@example.com' };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
    	this.setState({feedback: event.target.value})
  	}

  	handleSubmit(event) {
  		const template_id = 'template_id'
  		this.sendFeedback(template_id, {message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email})
  	}

  	sendFeedback(template_id, variables) {
  		window.emailjs.send(
  			'gmail', template_id, variables)
  			.then(res => {
  				console.log("Email successfully sent!")
  			})
  			.catch(err => console.error('Oh well, something went wrong.'))
  	}


  render() {
    return (
    <div> 
		<Button variant="outlined" color="primary" style= {{ margin:10, padding:10}}>
			<Link to="/impressum" style={{ textDecoration: 'none'}}>
			Impressum
			</Link>
		</Button>

	      <div
	        style={{
				display: "flex",
				justifyContent: "center",
				margin: 5,
				padding: 5
	        }}
	      >
	        <form style={{ width: "50%" }} id='contact-form'>
	          <h1>Kontaktieren Sie uns:</h1>

	          <FormControl margin="normal" fullWidth>
	            <InputLabel htmlFor="name">Name</InputLabel>
	            <Input id="name"
	            	type="text"
	            	onChange={this.handleChange}
	            	ref={ (c) => this.state.name = c}/>
	          </FormControl>

	          <FormControl margin="normal" fullWidth>
	            <InputLabel htmlFor="email">Email</InputLabel>
	            <Input id="email"
	            	type="email"
	            	onChange={this.handleChange}
	            	ref={ (c) => this.state.email = c} />
	          </FormControl>

	          <FormControl margin="normal" fullWidth>
	            <InputLabel htmlFor="email">Message</InputLabel>
	            <Input id="message"
	            	onChange={this.handleChange}
	            	multiline rows={10}
	            	ref={(c) => this.state.message = c}/>
	          </FormControl>

	          <Button variant="contained" color="primary" size="medium" onClick={this.handleSubmit}>
	            Send
	          </Button>
	        </form>
	        
	      </div>
	</div>
    );
  }
}