import React, { Component } from "react";
import { Marker } from "@react-google-maps/api";
import InfoBox from "./InfoBox";
import { firestore } from "../firebase-config";

export default class CreateMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: {
        id: props.name,
        position: { lat: props.lat, lng: props.lng },
        collection: props.type,
      },
      markerClicked: false,
      markerInfo: null,
    };
  }
  static getDerivedStateFromProps(props, current_state) {
    if (current_state.name !== props.name) {
      return {
        marker: {
          id: props.name,
          position: { lat: props.lat, lng: props.lng },
          collection: props.type,
        },
      };
    }
  }


  fetchData = async (collection, markerName) => {
    const data = await firestore
      .doc(`${collection}/${markerName}`)
      .get()
      .then(function (snapshot) {
        if (snapshot.exists) {
          return snapshot.data();
        }
      });
    return data;
  };

  handleMarkerClick = async () => {
    const data = await this.fetchData(
      this.state.marker.collection,
      this.state.marker.id
    );
    this.setState({
      markerInfo: data,
      markerClicked: true,
    });
    // this.setState({
    // });
  };
  handleBoxClosed = () => {
    this.setState({
      markerClicked: false,
    });
  };

  render() {
    const markerClicked = this.state.markerClicked;
    return (
      <div>
        <Marker
          position={this.state.marker.position}
          onClick={() => this.handleMarkerClick()}
          title={this.state.marker.id}
          icon={{
            url: `/${this.state.marker.collection}.png`,
          }}
        />
        {markerClicked ? (
          <InfoBox
            handleBoxClosed={this.handleBoxClosed}
            markerClicked={this.state.marker}
            markerInfo={this.state.markerInfo}
          />
        ) : null}
      </div>
    );
  }
}
