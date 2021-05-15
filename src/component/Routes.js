import React, { Component } from 'react'
import { Polyline } from '@react-google-maps/api';
import { ACESRoute, OlinRoute, OldMainRoute, GerberRoute } from "../utility/locations";

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
            isShown: false
        }
    }
    handleClick = () => {
        this.setState({
            isShown: !this.state.isShown
        });
    }
    render() {
        return (
            <div>
                <button onClick={() => this.handleClick()}>
                    {this.state.isShown ? "Hide ACES Route" : "Show ACES Route"}
                </button>
                <Polyline
                    path={ACESRoute}
                    visible={this.state.isShown}
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
                <button onClick = {() => this.handleClick()}>
                {this.state.isShown ? "Hide Olin Routes" : "Show Olin Routes"}
                </button>
                <Polyline
                    path={OlinRoute}
                    visible={this.state.isShown}
                    options={{
                        strokeOpacity: 0.7,
                        scale: 4,
                        strokeColor: "#a600ff"
                    }} />
                <button onClick = {() => this.handleClick()}>
                {this.state.isShown ? "Hide Old Main Routes" : "Show Old Main Routes"}
                </button>
                <Polyline
                    path={OldMainRoute}
                    visible={this.state.isShown}
                    options={{
                        strokeOpacity: 0.7,
                        scale: 4,
                        strokeColor: "#00d5ff"
                    }} />
                <button onClick = {() => this.handleClick()}>
                {this.state.isShown ? "Hide Gerber Routes" : "Show Gerber Routes"}
                </button>
                <Polyline
                    path={GerberRoute}
                    visible={this.state.isShown}
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