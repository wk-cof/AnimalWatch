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


import {Button, ButtonGroup} from "react-bootstrap";

class Mammals extends Component {
  render() {
    return (
        <ButtonGroup>
          <Button><img src={BrownBear} alt="Brown Bear" className="animal-type-button"/> </Button>
          <Button><img src={Bison} alt="Bison" className="animal-type-button"/> </Button>
          <Button><img src={BighornSheep} alt="Bighorn Sheep" className="animal-type-button"/> </Button>
          <Button><img src={Moose} alt="Moose" className="animal-type-button"/> </Button>
          <Button><img src={Squirrel} alt="Squirrel" className="animal-type-button"/> </Button>
        </ButtonGroup>
    );
  }
}

export default Mammals;