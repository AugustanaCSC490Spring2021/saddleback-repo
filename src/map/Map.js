import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { mapStyles } from "./MapStyles";
import Markers from "../component/Markers";
import AcesRoute from "../component/AcesRoute";
import SearchBox from "../component/searchBox";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 41.504511,
  lng: -90.549637,
};
const AUGUSTANA_BOUNDS = {
  north: 41.509083,
  south: 41.497427,
  west: -90.557047,
  east: -90.54464,
};

const libraries = ["places"];
const options = {
  styles: mapStyles,
  mapTypeId: "hybrid",
  mapTypeControl: false,
  restriction: {
    latLngBounds: AUGUSTANA_BOUNDS,
    strictBounds: false,
  },
};
const markers = [
 
  {
    name: "Hanson Expansion",
    lat: "41.504297",
    long: "-90.551095",
    type: "academic",
  },
  {
    name: "Old Main",
    lat: "41.504439",
    long: "-90.549609",
    type: "academic",
  },
  {
    name: "Lot B",
    lat: "41.505329",
    long: "-90.548099",
    type: "parking",
  },
  {
    name: "Olin",
    lat: "41.50315",
    long: "-90.550581",
    type: "academic",
  },
];
export default class Map extends Component {

  state = {
    filteredData: markers,
  };

  handleSearch = (e) => {
    const { value } = e.target;
    let filteredData = markers.filter((item) => {
      let currentvalue = item.name;
      return currentvalue.toLowerCase().includes(value.toLowerCase());
    });
    this.setState({ filteredData });
  };

  render() {
    return (
      <div>
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          libraries={libraries}
        >
          <h1>
            Augie Nav{" "}
            <span role="img" aria-label="satellite">
              📡
            </span>
          </h1>

          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={18}
            options={options}
          >
            {/* Child components, such as markers, info windows, etc. */}
            
            <Markers markers={this.state.filteredData} />

            <AcesRoute />
            <SearchBox handleSearch={this.handleSearch}/>

          </GoogleMap>
          
        </LoadScript>
      </div>
    );
  }
}
