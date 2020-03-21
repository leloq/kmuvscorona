import React, { Component } from 'react';
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import posts from "./dummy_posts";

import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Solution extends Component {

	constructor(props) {
		super(props);
		this.state = {
			solution: '',
			title: '',
			targetGroup: '',
		}
	}

	componentDidMount() {
		axios.get('http://localhost:5000/targetGroups/'+this.props.match.params.id)
			.then(response => {
				this.setState({
					solution: response.data.solution,
					title: response.data.title,
					targetGroup: response.data.targetGroup
				})
			})
		.catch(function (error) {
			console.log(error);
		})
	}

	render() {
		return (
			<div style={{ marginTop: 20, padding: 10 }}>
				<Grid container spacing={3} justify="center">
					{posts.map( (post) => 
					<Grid item xs={12} key={post.title}>
						<Card>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Contemplative Reptile"
									height="200"
									maxWidth="200"
									image= {post.image}
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										{post.title}
									</Typography>
									<Typography component="p">{post.excerpt}</Typography>
								</CardContent>
							</CardActionArea>
						<CardActions>
							<Button size="medium" color="primary">
								Share
							</Button>
							<Button size="small" color="primary">
								Learn More
							</Button>
						</CardActions>
						</Card>
					</Grid>
					)}
				</Grid>
			</div>
		);
	}
}