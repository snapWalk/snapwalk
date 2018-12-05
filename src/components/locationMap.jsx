import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
require("dotenv").config();

const LocationMap = (props) => (
  <ReactMapGL
    width={400}
    height={400}
    latitude={props.latitude}
    longitude={props.longitude}
    zoom={13}
    mapboxApiAccessToken={process.env.MAPBOX_TOKKEN}
  >
    <Marker latitude={props.latitude} longitude={props.longitude} offsetLeft={-20} offsetTop={-10}>
      <i className="fas fa-map-marker"></i>
    </Marker>
  </ReactMapGL>
);

export default LocationMap;
