import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
require("dotenv").config();

class LocationMap extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: props.latitude,
        longitude: props.longitude,
        zoom: 13
      }
    };
  }

  render () {
    console.log(this.props.latitude);
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={process.env.MAPBOX_TOKKEN}
        onViewportChange={(viewport) => this.setState({ viewport })}
      >
        <Marker latitude={this.props.latitude} longitude={this.props.longitude} offsetLeft={-20} offsetTop={-10}>
          <i className="fas fa-map-marker"></i>
        </Marker>
      </ReactMapGL>
    );
  }
}

export default LocationMap;
