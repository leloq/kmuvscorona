import React from "react";
import { Link } from 'react-router-dom';

import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField
} from "@material-ui/core";

class Contact extends React.Component {
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
	        <form style={{ width: "50%" }}>
	          <h1>Kontaktieren Sie uns:</h1>

	          <FormControl margin="normal" fullWidth>
	            <InputLabel htmlFor="name">Name</InputLabel>
	            <Input id="name" type="text" />
	          </FormControl>

	          <FormControl margin="normal" fullWidth>
	            <InputLabel htmlFor="email">Email</InputLabel>
	            <Input id="email" type="email" />
	          </FormControl>

	          <FormControl margin="normal" fullWidth>
	            <InputLabel htmlFor="email">Message</InputLabel>
	            <Input id="email" multiline rows={10} />
	          </FormControl>

	          <Button variant="contained" color="primary" size="medium">
	            Send
	          </Button>
	        </form>
	        
	      </div>
	</div>
    );
  }
}

export default Contact;