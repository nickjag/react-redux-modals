import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal, { actions } from '../src/';
import Button from './button';
import './modal.css';

class ModalLayerBottom extends Component {

  constructor(props) {
    super(props);
    
    this.handleCancel = this.handleCancel.bind(this);
  }
  
  handleCancel() {
    this.props.hideModal('MODAL_LAYER_BOTTOM');
  }

  render() {

    return (
      <Modal 
        level={this.props.level}
        handleClose={false} 
        handleEscape={this.handleCancel}>

        <div className="modal-body">
          <h3>Bottom Layer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget velit nulla. Aenean ultrices elementum dapibus.</p>
          <div className="button-bar">
            <Button componentStyle="blue" onClick={() => this.props.showModal('MODAL_LAYER_TOP')}>Open Top Layer</Button>
            <Button componentStyle="blue" onClick={this.handleCancel}>Close</Button>
          </div>
        </div>

      </Modal>
    );
  }
}

export default connect(null, actions)(ModalLayerBottom);