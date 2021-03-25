import './App.css';
import React, { Component } from 'react'
import {loadAcademicBuildingInfo} from './api/academic-buildingInfo'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      title:'default',
      description: 'default',
      image: "https://picsum.photos/200/300" //random image to
  };

  this.setInformation = this.setInformation.bind(this)
  this.handleChange = this.handleChange.bind(this);
  }

  
 setInformation(data){
  console.log('data recived', )
  this.setState({
      title: data.title,
      description: data.description,
      image: data.image
    })
 }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSearch = () => {
    console.log('Search for: ' + this.state.value);
    loadAcademicBuildingInfo(this.state.value, this.setInformation);
  }

render() {
  return (
    <div>
    <h1 id= 'currentTitle'>{this.state.test}</h1>
    <input type='textfield' id = 'findTitle' value= {this.state.value} onChange= {this.handleChange}/>
    <button id="searchButton" onClick = {this.handleSearch}> Search </button>
    <h1>{'title:', this.state.title}</h1>
    <h4>{'describtion:', this.state.description}</h4>
    <img src= {this.state.image} alt="new" width="400" height="400"/>
</div>
    );
  }
} 