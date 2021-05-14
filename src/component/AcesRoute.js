import React, { Component } from 'react'
import { Polyline } from '@react-google-maps/api';
import { AcesRouteCordin, OlinRoutes } from "../utility/locations";

const ACESRoute = {
    path: "M 0,-1 0,1",
    strokeOpacity: 1,
    scale: 5,
    strokeColor: "#ff0a0a"
};

export default class AcesRoute extends Component {
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
            <div class = "btn-group">
                <button onClick={() => this.handleClick()}>
                    {this.state.isShown ? "Hide ACES Route" : "Show ACES Route"}
                </button>
                <Polyline
                    path={AcesRouteCordin}
                    visible={this.state.isShown}
                    options={{
                        strokeOpacity: 0,
                        icons: [
                        {
                            icon: ACESRoute,
                            offset: "0",
                            repeat: "40px",
                        }
                        ]
                    }} />
                <button clicked={() => this.handleClick()}>
                {this.state.isShown ? "Hide Olin Routes" : "Show Olin Routes"}
                </button>
                <Polyline
                    path={OlinRoutes}
                    visible={this.state.isShown}
                    options={{
                        strokeOpacity: 1,
                        scale: 4,
                        strokeColor: "#03fcec"
                    }} />
                {/*   Child components, such as markers, routes, etc...   */}
            </div>
        );
    }
}