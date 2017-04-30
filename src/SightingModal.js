import React, { Component } from 'react';
import _ from "lodash";
import Modal from 'react-bootstrap-modal';
import './rbm-patch.css';
import './SightingModal.css';

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
          <Modal.Title id='ModalHeader'><h2>{sighting.value.animal.name}</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={sighting.value.animal.image_url} className='popup-modal-image' />
          <h3>Last spotted: {sighting.value.created_at}</h3>
          <p>{sighting.value.animal.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SightingModal;
