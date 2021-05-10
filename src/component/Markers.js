import React, { Component } from 'react'
import CreateMarker from '../component/CreateMarker'

export default class Markers extends Component {
    render() {
        return (
            <div>
                
                <CreateMarker name={'Lot B'} lat={41.505329} lng={-90.548099} type='parking'/>
                
                <CreateMarker name={'Bergendoff Hall'} lat={41.505368} lng={-90.549215} type='academic'/>
                <CreateMarker name={'Brunner Theater'} lat={41.504402} lng={-90.548231} type='academic'/>
                <CreateMarker name={'Denkman'} lat={41.504460} lng={-90.550639} type='academic'/>
                <CreateMarker name={'Gerber Center'} lat={41.502282} lng={-90.550689} type='academic'/>
                <CreateMarker name={'Hanson'} lat={41.503841} lng={-90.5513} type='academic'/>
                <CreateMarker name={'Hanson Expansion'} lat={41.504297} lng={-90.551095} type='academic'/>
                <CreateMarker name={'John Deere Planetarium'} lat={41.502783} lng={-90.548502} type='academic'/> 
                <CreateMarker name={'Old Main'} lat={41.504439} lng={-90.549609} type='academic'/>
                <CreateMarker name={'Olin'} lat={41.50315} lng={-90.550581} type='academic'/>
                <CreateMarker name={'Swenson Hall of Geosciences'} lat={41.503065} lng={-90.548949} type='academic'/>

                <CreateMarker name={'Augustana Admissions'} lat={41.503276} lng={-90.548512} type='misc'/>
                <CreateMarker name={'Centennial Hall'} lat={41.505011} lng={-90.548688} type='misc'/>
                <CreateMarker name={'Founders Hall'} lat={41.503313} lng={-90.548905} type='misc'/>

                <CreateMarker name={'Pepsico'} lat={41.500330} lng={-90.556027} type='recreational'/>
                
                <CreateMarker name={'11th Ave Flats'} lat={41.499977} lng={-90.548979} type='resident halls'/>
                <CreateMarker name={'Andreen Hall'} lat={41.501548} lng={-90.548265} type='resident halls'/>
                <CreateMarker name={'Arbough Residence Center'} lat={41.499243} lng={-90.551945} type='resident halls'/>
                <CreateMarker name={'Erickson'} lat={41.499203} lng={-90.554875} type='resident halls'/>
                <CreateMarker name={'Naseth Residence Center'} lat={41.498953} lng={-90.553385} type='resident halls'/>
                <CreateMarker name={'Parkander North'} lat={41.501180} lng={-90.549700} type='resident halls'/>
                <CreateMarker name={'Parkander South'} lat={41.500533} lng={-90.549936} type='resident halls'/>
                <CreateMarker name={'Seminary Hall'} lat={41.502987} lng={-90.548074} type='resident halls'/>
                <CreateMarker name={'Westerlin'} lat={41.500518} lng={-90.554864} type='resident halls'/>
            </div>
        )
    }
}