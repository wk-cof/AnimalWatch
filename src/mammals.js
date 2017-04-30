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


import {Button, ButtonGroup} from "react-bootstrap";

class Mammals extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleOnClick(animalName) {
    console.log(animalName);
    this.setState({ mammalName: animalName });
  }
  render() {
    let mammalName = '';
    if (this.state.mammalName) {
      mammalName = <h2> It's a {this.state.mammalName} </h2>;
    }
    return (
        <div>
          <ButtonGroup>
            <Button><img  src={BrownBear}
                          alt="Brown Bear"
                          className="animal-type-button"
                          onClick={() => this.handleOnClick('Brown Bear')} /> </Button>
            <Button><img  src={Bison}
                          alt="Bison"
                          className="animal-type-button"
                          onClick={() => this.handleOnClick('Bison')}/> </Button>
            <Button><img  src={BighornSheep}
                          alt="Bighorn Sheep"
                          className="animal-type-button"
                          onClick={() => this.handleOnClick('Bighorn Sheep')}/> </Button>
            <Button><img  src={Moose}
                          alt="Moose"
                          className="animal-type-button"
                          onClick={() => this.handleOnClick('Moose')}/> </Button>
            <Button><img  src={Squirrel}
                          alt="Squirrel"
                          className="animal-type-button"
                          onClick={() => this.handleOnClick('Squirrel')}/> </Button>
            <Button><img  src={Wolf}
                          alt="Grey Wolf"
                          className="animal-type-button"
                          onClick={() => this.handleOnClick('Grey Wolf')}/> </Button>
            <Button><img  src={Elk}
                          alt="Elk"
                          className="animal-type-button"
                          onClick={() => this.handleOnClick('Elk')}/> </Button>
            <Button><img  src={Jackrabbit}
                          alt="Jackrabbit"
                          className="animal-type-button"
                          onClick={() => this.handleOnClick('Jackrabbit')}/> </Button>
          </ButtonGroup>
          {mammalName}
        </div>
    );
  }
}

export default Mammals;