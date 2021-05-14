import React, { Component } from 'react'
import CreateMarker from '../component/CreateMarker'

export default class Markers extends Component {
    render() {
        return (
            <div>
                <CreateMarker name={'Olin'} lat={41.50315} lng={-90.550581} type='academic'/>
                <CreateMarker name={'Hanson'} lat={41.503841} lng={-90.5513} type='academic'/>
                <CreateMarker name={'Gerber Center'} lat={41.502559} lng={-90.550047} type='academic'/>
                <CreateMarker name={'Hanson Expansion'} lat={41.504297} lng={-90.551095} type='academic'/>
                <CreateMarker name={'Old Main'} lat={41.504439} lng={-90.549609} type='academic'/>
                <CreateMarker name={'Lot B'} lat={41.505329} lng={-90.548099} type='parking'/>
                <CreateMarker name={'Bergendoff Hall'} lat={41.505365} lng={-90.549254} type='academic'/>
                <CreateMarker name={'Brunner Theater'} lat={41.504314} lng={-90.5482} type='academic'/>
                <CreateMarker name={'Denkmann'} lat={41.504419} lng={-90.550528} type='academic'/>
                <CreateMarker name={'John Deere Plantation'} lat={41.502681} lng={-90.548496} type='academic'/>
                <CreateMarker name={'Swenson Hall of Geosciences'} lat={41.503029} lng={-90.549075} type='academic'/>
                <CreateMarker name={'Pepsico'} lat={41.50033} lng={-90.556292} type='recreational'/>
                
            </div>
        )
    }
}