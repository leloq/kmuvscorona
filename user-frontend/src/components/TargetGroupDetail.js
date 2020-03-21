import React, { Component } from 'react';
import axios from './../axiosInstance';
import { Link } from 'react-router-dom';
import { View, Image, Text } from 'react-native';
import GridList from '@material-ui/core/GridList';
import ProblemList from './ProblemList'

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
    axios.get('targetGroups/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          groupname: response.data.groupname,
          
          imageUrl: response.data.imageUrl,
          description: response.data.description
        })
        response.data.problems.forEach((problemid)=>{
          axios.get('problems/'+problemid)
          .then(res => {
            this.setState( (state) => {
              return {
                ...state,
                problems: [
                ...state.problems, res.data]
              }
            })
          })
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
         <div><ProblemList problems={this.state.problems}/>  </div>

      </div>


    )
  }
}