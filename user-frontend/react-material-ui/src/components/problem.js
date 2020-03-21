import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import axios from 'axios';

axios.get('http://localhost:5000/problems/')
	.then(response => {
		if (response.data.length > 0) {
			this.setState({ 
			problems: response.data//.map(user => user.username),
			//username: response.data[0].username
			});
		}
	})
	.catch((error) => {
	console.log(error);
	})