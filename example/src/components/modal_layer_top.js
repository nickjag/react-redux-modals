import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal, { actions } from '../src/';
import Button from './button';
import './modal.css';

class ModalLayerTop extends Component {

  constructor(props) {
    super(props);
    
    this.handleCancel = this.handleCancel.bind(this);;
  }
  
  handleCancel() {
    this.props.hideModal('MODAL_LAYER_TOP');
  }

  render() {

    return (
      <Modal 
        level={this.props.level}
        handleClose={false} 
        handleEscape={this.handleCancel}>

        <div className="modal-body" style={{top: "-25px", left: "-25px"}}>
          <h3>Top Layer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget velit nulla. Aenean ultrices elementum dapibus.</p>
          <div className="button-bar">
            <Button componentStyle="blue" onClick={() => this.props.showModal('MODAL_LAYER_MIND')}>What card am I thinking of?</Button>
            <Button componentStyle="blue" onClick={this.handleCancel}>Close</Button>
          </div>
        </div>

      </Modal>
    );
  }
}

export default connect(null, actions)(ModalLayerTop);