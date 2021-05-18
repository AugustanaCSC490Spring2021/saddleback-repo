import React from 'react'

export default function SearchBox(props) {
    return (
        <div className="SearchBox">
             <input style={{padding:'10px',borderRadius:"20px",backgroundColor:'#eee',borderColor:'#eee'}}
                type="text"
                placeholder="🔎Search..."
                onChange={props.handleSearch} />
        </div>
    )
}
