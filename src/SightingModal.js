import React, { Component } from 'react';
import _ from "lodash";
import Modal from 'react-bootstrap-modal';
import './rbm-patch.css';

class SightingModal extends Component {
  render() {
    const { isOpen, sighting, closeCallback } = this.props;
    return (
      <Modal
        show={isOpen}
        onHide={closeCallback}
        aria-labelledby="ModalHeader"
      >
        <Modal.Header closeButton>
          <Modal.Title id='ModalHeader'>{sighting.value.Animal.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={sighting.value.image_url} />
          <h3>Last spotted @ {sighting.value.created_at}</h3>
          <p>{sighting.value.Animal.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SightingModal;
