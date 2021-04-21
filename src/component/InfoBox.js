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
                onCloseClick={() => {this.props.handleBoxClosed()}}
            >
                <div>
                    <h2>{this.state.markerInfo.description}</h2>
                </div>
            </InfoWindow>

        )
    }
}