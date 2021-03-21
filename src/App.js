import './App.css';
import React, { Component } from 'react'
import {getAcademicBuildingInfo} from './api/academic-buildingInfo'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      title:'default',
      describtion: 'default',
      image: "https://picsum.photos/200/300" //random image to
  };

  this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSearch = () => {
    console.log('Search for: ' + this.state.value);
    var infoAboutBuilding = getAcademicBuildingInfo(this.state.value);
    console.log("info", infoAboutBuilding)  // when info comeback into extract it to sent the parameters below
    // this.setState({
    //   title: myData.title,
    //   describtion: myData.describtion,
    //   image: myData.image
    // })
  }

render() {
  return (
    <div>
    <h1 id= 'currentTitle'>{this.state.test}</h1>
    <input type='textfield' id = 'findTitle' value= {this.state.value} onChange= {this.handleChange}/>
    <button id="searchButton" onClick = {this.handleSearch}> Search </button>
    <h1>{'title:', this.state.title}</h1>
    <h4>{'describtion:', this.state.describtion}</h4>
    <img src= {this.state.image} alt="new"/>
</div>
    );
  }
} 