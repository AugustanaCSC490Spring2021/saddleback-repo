import React, { Component } from 'react'
import { Polyline } from '@react-google-maps/api';


const AcesRouteCordin = ([
    { lng: -90.55710009078545, lat: 41.50070851967313 },
    { lng: -90.55718147605607, lat: 41.49899230072783 },
    { lng: -90.55518995344495, lat: 41.49887689376214 }, 
    { lng: -90.55521464830053, lat: 41.49756178501951 }, 
    { lng: -90.55120276376341, lat: 41.49751511594916 }, 
    { lng: -90.55120361302737, lat: 41.49924278025966 },
    { lng: -90.54875835027289, lat: 41.49918221734204 }, 
    { lng: -90.5487513563868, lat: 41.50039187805645 },
    { lng: -90.54764297833707, lat: 41.50044185566128 }, 
    { lng: -90.54760318341053, lat: 41.50193557588057 }, 
    { lng: -90.5488846294821, lat: 41.50271212918528 }, 
    { lng: -90.54764731559709, lat: 41.50223071261104 }, 
    { lng: -90.54771706753576, lat: 41.50619885695746 }, 
    { lng: -90.54775276894978, lat: 41.50696053568859 }, 
    { lng: -90.54837239282601, lat: 41.50740795989594 }, 
    { lng: -90.55013355184408, lat: 41.50754562611634 }, 
    { lng: -90.55010153754753, lat: 41.50617258829868 }, 
    { lng: -90.54837453407279, lat: 41.50610217598415 }, 
    { lng: -90.54838683162895, lat: 41.50478394758257 }, 
    { lng: -90.55013695446739, lat: 41.50483562143317 }, 
    { lng: -90.5526000547862, lat: 41.50481831060753 }, 
    { lng: -90.55256596058565, lat: 41.50260212584679 }, 
    { lng: -90.55111872638716, lat: 41.50254708421676 }, 
    { lng: -90.5511481201243, lat: 41.50210420610041 }, 
    { lng: -90.55263156677348, lat: 41.5020763107075 }, 
    { lng: -90.5526582505795, lat: 41.50148891079732 }, 
    { lng: -90.55544733942376, lat: 41.50151850453228 }, 
    { lng: -90.55557784522918, lat: 41.50067084373526 }, 
    { lng: -90.55710009078545, lat: 41.50070851967313 }

])
const lineSymbol = {
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
            <div>
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
                                icon: lineSymbol,
                                offset: "0",
                                repeat: "35px",
                            }
                        ]
                    }} />
            </div>
        )
    }
}