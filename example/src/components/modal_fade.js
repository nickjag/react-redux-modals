import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal, { actions } from 'react-redux-modals';
import Button from './button';
import './modal.css';

class ModalFade extends Component {

  constructor(props) {
    super(props);
    
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.hideModal('MODAL_FADE');
  }

  render() {

    return (
      <Modal 
        animate={true}
        config={this.props.modalConfig}
        handleEscape={this.handleClose}>

        <div className="modal-body">
          <h3>Lorem ipsum dolor sit amet?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget velit nulla. Aenean ultrices elementum dapibus.</p>
          <div className="button-bar">
            <Button componentStyle="blue" onClick={this.handleClose}>Close</Button>
          </div>
        </div>

      </Modal>
    );
  }
}

export default connect(null, actions)(ModalFade);