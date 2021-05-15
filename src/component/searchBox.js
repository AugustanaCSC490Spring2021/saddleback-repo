import React from 'react'

export default function SearchBox(props) {
    return (
        <div className="SearchBox">
             <input 
                type="text"
                placeholder="🔎Search..."
                onChange={props.handleSearch} />
        </div>
    )
}
