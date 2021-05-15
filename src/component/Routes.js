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
            isShownOlin: false
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
      
    }
    render() {
        return (
            <div>
                <button onClick={() => this.handleClick('ACES')} class="ACES">
                    {this.state.isShownAces ? "Hide ACES Route" : "Show ACES Route"}
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
                {this.state.isShownOlin ? "Hide Olin Routes" : "Show Olin Routes"}
                </button>
                <Polyline
                    path={OlinRoute}
                    visible={this.state.isShownOlin}
                    options={{
                        strokeOpacity: 0.7,
                        scale: 4,
                        strokeColor: "#a600ff"
                    }} />
                {/* <button onClick = {() => this.handleClick()}>
                {this.state.isShownAces ? "Hide Old Main Routes" : "Show Old Main Routes"}
                </button>
                <Polyline
                    path={OldMainRoute}
                    visible={this.state.isShownAces}
                    options={{
                        strokeOpacity: 0.7,
                        scale: 4,
                        strokeColor: "#00d5ff"
                    }} />
                <button onClick = {() => this.handleClick()}>
                {this.state.isShownAces ? "Hide Gerber Routes" : "Show Gerber Routes"}
                </button>
                <Polyline
                    path={GerberRoute}
                    visible={this.state.isShownAces}
                    options={{
                        strokeOpacity: 0.7,
                        scale: 4,
                        strokeColor: "#ffb300"
                    }} /> */}
                {/*   Child components, such as markers, routes, etc...   */}
            </div>
        );
    }
}