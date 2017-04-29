import _ from "lodash";

import {
  default as React,
  Component,
} from "react";

import Helmet from "react-helmet";
import './new-sighting.css';

import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import mapPin from "./map-pin-transparent-clipart-1.jpg"

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={10}
    defaultCenter={{ lat: 44.4280, lng: -110.5885 }}
    onClick={props.onMapClick}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

class Map extends Component {
  state = {
    markers: [],
  };

  handleMapLoad = this.handleMapLoad.bind(this);
  handleMapClick = _.noop;
  handleMarkerRightClick = _.noop;

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  render() {
    return (
      <div style={{height: `100%`}}>
        <img src={mapPin} className="new-sightings-pin-image" alt="mapPin" />
        <Helmet
          title="Getting Started"
        />
        <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: '400px', width: '400px' }} />
          }
          mapElement={
            <div style={{ height: '400px' }} />
          }
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          markers={this.state.markers}
          onMarkerRightClick={this.handleMarkerRightClick}
        />
      </div>
    );
  }
}

export default Map;