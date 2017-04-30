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

import mapPin from "./images/pin.jpg"
import bear from "./images/bear.png"
import eagle from "./images/eagle.png"
import frog from "./images/frog.png"
import fish from "./images/fish.png"
import snek from "./images/snek.png"
import {Button, PageHeader} from "react-bootstrap";

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={12}
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
        <Helmet
          title="Animal Watch: New Sighting"
        />
        <img src={mapPin} className="new-sightings-pin-image" />
        <GettingStartedGoogleMap
          containerElement={
            <div className="new-sighting-map" />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          markers={this.state.markers}
          onMarkerRightClick={this.handleMarkerRightClick}
        />
        <h2> What type of animal do you see? </h2>
        <Button> <img src={bear} className="animal-type-button" /></Button>
        <Button> <img src={eagle} className="animal-type-button" /></Button>
        <Button> <img src={snek} className="animal-type-button" /></Button>
        <Button> <img src={frog} className="animal-type-button" /></Button>
        <Button> <img src={fish} className="animal-type-button" /></Button>
      </div>
    );
  }
}

export default Map;