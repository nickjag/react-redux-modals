import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal, { actions } from 'react-redux-modals';
import Button from './button';
import './modal.css';

class ModalAgree extends Component {

  constructor(props) {
    super(props);
    
    this.handleClose = this.handleClose.bind(this);
    this.handleDisagree = this.handleDisagree.bind(this);
    this.handleAgree = this.handleAgree.bind(this);
  }
    
  handleClose() {
    this.props.hideModal('MODAL_AGREE');
  }

  handleDisagree() {
    alert('I disagree!');
    this.handleClose();
  }

  handleAgree() {
    alert('I agree!');
    this.handleClose();
  }

  render() {

    return (
      <Modal 
        config={this.props.modalConfig}
        handleEscape={this.handleClose}>

        <div className="modal-body">
          <h3>Lorem ipsum dolor sit amet?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget velit nulla. Aenean ultrices elementum dapibus.</p>
          <div className="button-bar">
            <Button componentStyle="blue" onClick={this.handleDisagree}>Disagree</Button>
            <Button componentStyle="blue" onClick={this.handleAgree}>Agree</Button>
          </div>
        </div>

      </Modal>
    );
  }
}

export default connect(null, actions)(ModalAgree);