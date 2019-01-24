import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal, { actions } from 'react-redux-modals';
import Button from './button';
import './modal.css';

class ModalProps extends Component {

  constructor(props) {
    super(props);
    
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.hideModal('MODAL_PROPS');
  }

  render() {

    let mockData = 'There were ' + Math.floor(Math.random() * 1000) + ' visits yesterday';

    return (
      <Modal 
        config={this.props.modalConfig}
        handleEscape={this.handleClose}>

        <div className="modal-body">
          <h3>Modal with props</h3>
          <p>Hello, {this.props.name}</p>
          <p>Sample data: {mockData}</p>
          <div className="button-bar">
            <Button componentStyle="blue" onClick={() => this.props.onSubmitData(mockData)}>Send data</Button>
            <Button componentStyle="blue" onClick={this.handleClose}>Close</Button>
          </div>
        </div>

      </Modal>
    );
  }
}

export default connect(null, actions)(ModalProps);