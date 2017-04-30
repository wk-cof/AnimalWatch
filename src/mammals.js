import _ from "lodash";
import {
  default as React,
  Component,
} from "react";

import {
  ToastContainer,
  ToastMessage,
} from 'react-toastr';
const ToastMessageFactory = React.createFactory(ToastMessage.animation);

import BrownBear from './images/brown-bear.png'
import BighornSheep from './images/bighorn-sheep.png'
import Bison from './images/bison.png'
import Moose from './images/moose.png'
import Squirrel from './images/squirrel.png'
import Wolf from './images/wolf.png'
import Elk from './images/elk.png'
import Jackrabbit from './images/jackrabbit.png'
import RiverOtter from './images/river-otter.png'
import Beaver from './images/beaver.png'

import { Button, ButtonGroup } from "react-bootstrap";
import { connect, PromiseState } from 'react-refetch';
import { browserHistory } from 'react-router';

import Camera from './camera.js';

class Mammals extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOnClick(animalName, isDangerZone) {
    this.setState({ mammalName: animalName, isDangerZone: isDangerZone });
  }

  createSighting(animalName) {
    this.props.postSighting(
      {
        latitude: 44.4180,
        longitude: -110.595,
        animal: {
          name: animalName,
        },
      },
      () => {
        this.addSuccess();
        browserHistory.push(`/`);
      },
    );
  }

  addSuccess = this.addSuccess.bind(this);

  addSuccess() {
    console.log("success");
    this.refs.successCallback.success(`Sighting created!`, `Hey there!`, {
      closeButton: true,
    });
  }

  addAlert() {
    this.refs.container.warning(`This animal is dangerous! Don't come closer than 100 yards away.`, `Hey there!`, {
      closeButton: true,
    });
  }

  render() {
    if (this.state.isDangerZone) {
      this.addAlert();
    }

    return (
      <div>
        <ToastContainer
          toastMessageFactory={ToastMessageFactory}
          ref="container"
          className="toast-top-right"
          />
        <ToastContainer
          toastMessageFactory={ToastMessageFactory}
          ref="successCallback"
          className="toast-top-center"
          />
        <ButtonGroup>
          <Button><img src={BrownBear}
            alt="Brown Bear"
            className="animal-type-button"
            onClick={() => this.handleOnClick('Brown Bear', true)} /> </Button>
          <Button><img src={Bison}
            alt="Bison"
            className="animal-type-button"
            onClick={() => this.handleOnClick('Bison', true)} /> </Button>
          <Button><img src={BighornSheep}
            alt="Bighorn Sheep"
            className="animal-type-button"
            onClick={() => this.handleOnClick('Bighorn Sheep', true)} /> </Button>
          <Button><img src={Moose}
            alt="Moose"
            className="animal-type-button"
            onClick={() => this.handleOnClick('Moose', true)} /> </Button>
          <Button><img src={Squirrel}
            alt="Squirrel"
            className="animal-type-button"
            onClick={() => this.handleOnClick('Squirrel', false)} /> </Button>
          <Button><img src={Wolf}
            alt="Grey Wolf"
            className="animal-type-button"
            onClick={() => this.handleOnClick('Grey Wolf', true)} /> </Button>
          <Button><img src={Elk}
            alt="Elk"
            className="animal-type-button"
            onClick={() => this.handleOnClick('Elk', true)} /> </Button>
          <Button><img src={Jackrabbit}
            alt="Jackrabbit"
            className="animal-type-button"
            onClick={() => this.handleOnClick('Jackrabbit', false)} /> </Button>
          <Button><img src={RiverOtter}
            alt="River Otter"
            className="animal-type-button"
            onClick={() => this.handleOnClick('River Otter', false)} /> </Button>
          <Button><img src={Beaver}
            alt="Beaver"
            className="animal-type-button"
            onClick={() => this.handleOnClick('Beaver', false)} /> </Button>
        </ButtonGroup>
        {this.state.mammalName &&
          <div>
            <h2>It's a {this.state.mammalName}</h2>
            <Button
              type='submit' bsStyle="success" bsSize='large'
              onClick={() => this.createSighting(this.state.mammalName)}
              >
              Submit
              </Button>

         <Camera>
         <Button onClick={() => { this.refs.webcam.captureScreenshot(); }}></Button>
         </Camera>
          </div>
        }
      </div>
    );
  }
}

export default connect(props => ({
  postSighting: (payload, successCallback) => ({
    postSightingResponse: {
      url: `https://animal-watch-api.herokuapp.com/sightings`,
      method: 'POST',
      body: JSON.stringify(payload),
      then: successCallback,
    },
  }),
}))(Mammals);
