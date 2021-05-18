import "./App.css";
import React, { Component } from "react";
//import Directions from "./component/Directions/Directions";
import Map from "./map/Map";
import Header from "./component/Header";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Map />
      </div>
    );
  }
}
