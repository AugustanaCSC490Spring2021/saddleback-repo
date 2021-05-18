import React, { Component } from 'react'
import { Polyline } from '@react-google-maps/api';
import { ACESRoute, OlinRoute, OldMainRoute, GerberRoute } from "../utility/Locations";

const lineSymbol = {
    path: "M 0,-1 0,1",
    strokeOpacity: 1,
    scale: 5,
    strokeColor: "#ff0a0a"
};

export default class Routes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShownAces: false,
            isShownOlin: false,
            isShownOldMain: false,
            isShownGerber: false
        }
    }
    handleClick = (buttonClicked) => {
        if(buttonClicked === 'ACES'){
            this.setState({
                isShownAces: !this.state.isShownAces
            });
        }
        if(buttonClicked === 'Olin'){
            this.setState({
                isShownOlin: !this.state.isShownOlin
            });
        }
        if(buttonClicked === 'Old_Main'){
            this.setState({
                isShownOldMain: !this.state.isShownOldMain
            });
        }
        if(buttonClicked === 'Gerber'){
            this.setState({
                isShownGerber: !this.state.isShownGerber
            });
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => this.handleClick('ACES')} class="ACES">
                    {this.state.isShownAces ? "ACES Route" : "ACES Route"}
                </button>
                <Polyline
                    path={ACESRoute}
                    visible={this.state.isShownAces}
                    options={{
                        strokeOpacity: 0,
                        icons: [
                        {
                            icon: lineSymbol,
                            offset: "0",
                            repeat: "40px",
                        }
                        ]
                    }} />
                <button onClick = {() => this.handleClick('Olin')} class='Olin'>
                {this.state.isShownOlin ? "Olin Routes" : "Olin Routes"}
                </button>
                <Polyline
                    path={OlinRoute}
                    visible={this.state.isShownOlin}
                    options={{
                        strokeOpacity: 0.7,
                        scale: 4,
                        strokeColor: "#a600ff"
                    }} />
                <button onClick = {() => this.handleClick("Old_Main")} class="Old_Main">
                {this.state.isShownOldMain ? "Old Main Routes" : "Old Main Routes"}
                </button>
                <Polyline
                    path={OldMainRoute}
                    visible={this.state.isShownOldMain}
                    options={{
                        strokeOpacity: 0.7,
                        scale: 4,
                        strokeColor: "#00d5ff"
                    }} />
                <button onClick = {() => this.handleClick("Gerber")} class="Gerber">
                {this.state.isShownGerber ? "Gerber Center Routes" : "Gerber Center Routes"}
                </button>
                <Polyline
                    path={GerberRoute}
                    visible={this.state.isShownGerber}
                    options={{
                        strokeOpacity: 0.7,
                        scale: 4,
                        strokeColor: "#ffb300"
                    }} />
                {/*   Child components, such as markers, routes, etc...   */}
            </div>
        );
    }
}