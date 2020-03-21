import React from "react";
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
      <div
        style={{
          justifyContent: "center",
          margin: 20,
          padding: 20,
          width: '100%'
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

        <div style={{
          margin: 20,
          padding: 20,
          width: '100%'
        }}>
        	<h3> Impressum: </h3>
        	<span> 
        		<b>Büroanschrift:</b> <br /> 
        		Nicolai Semmelmann <br />
        		Müllerstr. 27  <br />
        		80469 München <br />
        	</span>
        </div>
      </div>
    );
  }
}

export default Contact;