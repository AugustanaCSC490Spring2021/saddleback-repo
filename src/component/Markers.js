import React, { Component } from 'react'
import CreateMarker from '../component/CreateMarker'

export default class Markers extends Component {
    render() {
        return (
            <div>
                <CreateMarker name={'Olin'} lat={41.50315} lng={-90.550581} />
                <CreateMarker name={'Hanson'} lat={41.503841} lng={-90.5513} />
            </div>
        )
    }
}