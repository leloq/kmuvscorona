import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class TargetGroupDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupname: '',
      imageUrl: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/targetGroups/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          groupname: response.data.groupname,
          imageUrl: response.data.imageUrl
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  render() {
    return (
      <div>
        <h1>{this.state.groupname}</h1>
        <img src={this.state.imageUrl} alt="Bild" height="10%" width="10%"/>
        
        <Link to="/">Back to Home</Link>
      </div>
    )
  }
}