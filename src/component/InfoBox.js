import React, { Component } from 'react'
import { InfoWindow } from '@react-google-maps/api';

export default class InfoBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            markerClicked: props.markerClicked,
            markerInfo: props.markerInfo
        }
    }

    render() {
        return (
            <InfoWindow
                position={this.state.markerClicked.position}
                onCloseClick={() => { this.props.handleBoxClosed() }}
            >
                <div>
                <h1>{this.state.markerInfo.title}</h1>
                <img src= {this.state.markerInfo.image}  width="200" height="200" alt = {this.state.markerClicked.id}/>
                <p>{this.state.markerInfo.description}</p>
                </div>
            </InfoWindow>

        )
    }
}