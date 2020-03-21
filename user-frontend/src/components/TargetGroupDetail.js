import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { View, Image, Text } from 'react-native';
import GridList from '@material-ui/core/GridList';

export default class TargetGroupDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupname: '',
      imageUrl: '',
      description: '',
      problems: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/targetGroups/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          groupname: response.data.groupname,
          problems: response.data.problems,
          imageUrl: response.data.imageUrl,
          description: response.data.description
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  descriptionHeader() {
    return (
      <div class="container">
        <View style={{position: 'absolute', top: 50, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
          <img src={this.state.imageUrl} alt='target group image' class='responsive' />
          <div class="centered" style={{backgroundColor: 'rgba(0, 0, 0, .3)'}}> {this.state.groupname}  </div>
          <div class="description" style={{backgroundColor: 'rgba(0, 0, 0, .3)'}}> {this.state.description} </div>
        </View>
      </div>
      );
  }

  render() {
    return (
      <div>
         { this.descriptionHeader() }  
      </div>
    )
  }
}