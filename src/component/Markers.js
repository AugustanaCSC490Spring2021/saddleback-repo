import React, { Component } from 'react'
import CreateMarker from '../component/CreateMarker'

export default class Markers extends Component {
    render() {
        return (
            <div>
                <CreateMarker name={'Olin'} lat={41.50315} lng={-90.550581} type='academic'/>
                <CreateMarker name={'Hanson'} lat={41.503841} lng={-90.5513} type='academic'/>
                <CreateMarker name={'Gerber Center'} lat={41.502282} lng={-90.550689} type='academic'/>
                <CreateMarker name={'Hanson Expansion'} lat={41.504297} lng={-90.551095} type='academic'/>
                <CreateMarker name={'Old Main'} lat={41.504439} lng={-90.549609} type='academic'/>
                <CreateMarker name={'Lot B'} lat={41.505329} lng={-90.548099} type='parking'/>
            </div>
        )
    }
}