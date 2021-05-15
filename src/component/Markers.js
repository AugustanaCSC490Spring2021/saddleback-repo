import React from "react";
import CreateMarker from "../component/CreateMarker";

export default function Markers(props)  {

    return (
      <div>
        {props.markers.map((item, i) => {
          return (
            <CreateMarker key={i} name={item.name} lat={parseFloat(item.lat)} lng={parseFloat(item.long)} type={item.type}/>
          );
        })}
      </div>
    );
  
}
