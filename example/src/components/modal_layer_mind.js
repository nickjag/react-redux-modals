import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal, { actions } from '../src/';
import Button from './button';
import './modal.css';
import card from './queen_of_hearts.svg';

class ModalLayerTop extends Component {

  constructor(props) {
    super(props);
    
    this.handleCancel = this.handleCancel.bind(this);;
  }
  
  handleCancel() {
    this.props.hideModal('MODAL_LAYER_MIND');
  }

  render() {

    return (
      <Modal 
        level={this.props.level}
        handleClose={false} 
        handleEscape={this.handleCancel}>
        
        <img style={{top: "-50px", left: "-50px"}} src={card} className="card" alt="queen of hearts" />

      </Modal>
    );
  }
}

export default connect(null, actions)(ModalLayerTop);