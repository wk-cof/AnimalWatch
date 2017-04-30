import _ from "lodash";
import {
  default as React,
  Component,
} from "react";

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


import {Button, ButtonGroup} from "react-bootstrap";

class Mammals extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleOnClick(animalName, isDangerZone) {
    console.log(animalName);
    this.setState({ mammalName: animalName, isDangerZone: isDangerZone });
  }
  render() {
    let mammalName = '', submitButton = '';
    if (this.state.mammalName) {
      mammalName = <h2> It's a {this.state.mammalName} </h2>;
      submitButton = <Button type='submit' bsStyle="success" bsSize='large'> Submit </Button>
    }
    if (this.state.isDangerZone) {
      console.log('danger!');
    }
    return (
        <div>
          <ButtonGroup>
            <Button><img  src={BrownBear}
                          alt="Brown Bear"
                          className="animal-type-button"
                          onClick={() => this.handleOnClick('Brown Bear', true)} /> </Button>
            <Button><img  src={Bison}
                          alt="Bison"
                          className="animal-type-button"
                          onClick={() => this.handleOnClick('Bison', true)}/> </Button>
            <Button><img  src={BighornSheep}
                          alt="Bighorn Sheep"
                          className="animal-type-button"
                          onClick={() => this.handleOnClick('Bighorn Sheep', true)}/> </Button>
            <Button><img  src={Moose}
                          alt="Moose"
                          className="animal-type-button"
                          onClick={() => this.handleOnClick('Moose', true)}/> </Button>
            <Button><img  src={Squirrel}
                          alt="Squirrel"
                          className="animal-type-button"
                          onClick={() => this.handleOnClick('Squirrel', false)}/> </Button>
            <Button><img  src={Wolf}
                          alt="Grey Wolf"
                          className="animal-type-button"
                          onClick={() => this.handleOnClick('Grey Wolf', true)}/> </Button>
            <Button><img  src={Elk}
                          alt="Elk"
                          className="animal-type-button"
                          onClick={() => this.handleOnClick('Elk', true)}/> </Button>
            <Button><img  src={Jackrabbit}
                          alt="Jackrabbit"
                          className="animal-type-button"
                          onClick={() => this.handleOnClick('Jackrabbit', false)}/> </Button>
            <Button><img  src={RiverOtter}
                          alt="River Otter"
                          className="animal-type-button"
                          onClick={() => this.handleOnClick('River Otter', false)}/> </Button>
            <Button><img  src={Beaver}
                          alt="Beaver"
                          className="animal-type-button"
                          onClick={() => this.handleOnClick('Beaver', false)}/> </Button>
          </ButtonGroup>
          {mammalName}
          {submitButton}
        </div>
    );
  }
}

export default Mammals;