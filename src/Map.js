import _ from "lodash";

import {
  default as React,
  Component,
} from "react";

import Helmet from "react-helmet";

import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { Button } from 'react-bootstrap';
import './Map.css';
import { withRouter } from 'react-router-dom'

const NewSightingButton = withRouter(({ history }) => (
  <Button
    bsStyle="success"
    bsSize="large"
    className="map-new-sighting-button"
    onClick={() => { history.push('/new-sighting') }}
  >
    New Sighting
  </Button>
))

import { connect, PromiseState } from 'react-refetch';

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={8}
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

  constructor(props) {
    super(props);
    this.state = {
      markers: [],
    }
  }
//   state = {
//     markers: [
//     {
//       position: {
//         lat: 44.7128,
//         lng: -110.0059
//       },
//       key: 'New York',
//       defaultAnimation: 2
//     },
//     {
//       position: {
//         lat: 44.7128,
//         lng: -111.0059
//       },
//       key: `Taiwan`,
//       defaultAnimation: 1,
//     }],
//   };

  componentWillReceiveProps(nextProps) {
    if (nextProps.sightingsFetch.fulfilled && this.state.markers.length === 0) {
      const markers = [];
      nextProps.sightingsFetch.value.forEach(sighting => 
        markers.push({
          position: {
            lat: sighting.latitude,
            lng: sighting.longitude,
          },
          key: sighting.id,
          defaultAnimation: 1,
        })
      )
      this.setState({
        markers: markers,
      })
    }
  }

  handleMapLoad = this.handleMapLoad.bind(this);
  handleMapClick = this.handleMapClick.bind(this);
  handleMarkerRightClick = this.handleMarkerRightClick.bind(this);

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick(event) {
    const nextMarkers = [
      ...this.state.markers,
      {
        position: event.latLng,
        defaultAnimation: 2,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      },
    ];
    this.setState({
      markers: nextMarkers,
    });

    if (nextMarkers.length === 3) {
      this.props.toast(
        `Right click on the marker to remove it`,
        `Also check the code!`
      );
    }
  }

  handleMarkerRightClick(targetMarker) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
    this.setState({
      markers: nextMarkers,
    });
  }

  render() {
    return (
      <div style={{ height: '95vh' }}>
        <Helmet
          title="Animal Watch"
        />
        <NewSightingButton> New Sighting </NewSightingButton>
        <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: '100%' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
          onMapLoad={this.handleMapLoad}
          onMapClick={_.noop}
          markers={this.state.markers}
          onMarkerRightClick={this.handleMarkerRightClick}
        />
      </div>
    );
  }
}

export default connect(props => ({
  // sightingsFetch: `localhost:8080/sightings`,
  sightingsFetch: `https://animal-watch-api.herokuapp.com/sightings`,
}))(Map);