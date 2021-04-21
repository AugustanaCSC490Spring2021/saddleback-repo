import React, { Component } from 'react'
import { Marker } from '@react-google-maps/api';
import InfoBox from './InfoBox'
import { firestore } from '../firebase-config'


export default class CreateMarker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      marker: {
        id: props.name,
        position: { lat: props.lat, lng: props.lng }
      },
      markerClicked: false,
      markerInfo: null
    }
  }

  async componentDidMount() {
    const data = await this.fetchData(this.state.marker.id)
    this.setState({
      markerInfo: data
    })
  }

  fetchData = async (markerName) => {
    const data = await firestore.doc(`academic/${markerName}`).get().then(function (snapshot) {
      if (snapshot.exists) {
        return snapshot.data()
      }
    })
    return data
  }

  handleMarkerClick = () => {
    this.setState({
      markerClicked: true
    });
  }
  handleBoxClosed = () => {
    this.setState({
      markerClicked: false
    });
  }

  render() {
    const markerClicked = this.state.markerClicked
    return (
      <div>
        <Marker
          position={this.state.marker.position}
          onClick={() => this.handleMarkerClick()}
          title={this.state.marker.id}
        />
        {markerClicked ?
          <InfoBox
            handleBoxClosed={this.handleBoxClosed}
            markerClicked={this.state.marker}
            markerInfo={this.state.markerInfo}
          />
          : null}
      </div>
    )
  }
}