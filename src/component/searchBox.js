import React from 'react'

export default function SearchBox(props) {
    return (
        <div className="App">
             <input 
                type="text"
                placeholder="🔎Search..."
                onChange={props.handleSearch} />
        </div>
    )
}
