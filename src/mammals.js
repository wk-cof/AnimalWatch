import _ from "lodash";
import {
  default as React,
  Component,
} from "react";

import {MenuItem, DropdownButton} from "react-bootstrap";

class Mammals extends Component {
  render() {
    return (
        <DropdownButton>
            <MenuItem eventKey="1">Deer</MenuItem>
            <MenuItem eventKey="2">Wolf</MenuItem>
            <MenuItem eventKey="3">Groundhog</MenuItem>
            <MenuItem eventKey="4">Rabbit</MenuItem>
        </DropdownButton>
    );
  }
}

export default Mammals;