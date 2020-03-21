import React, { Component } from 'react';
import axios from 'axios';

export default class TargetGroupDetail extends Component {
  constructor(props) {
    console.log("holla")
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
        <h1>{this.groupname}</h1>
      </div>
    )
  }
}