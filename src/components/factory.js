import React, { Component } from 'react';
import { connect } from 'react-redux';

class ModalFactory extends Component {
  
  renderModalComponent({ modalType, level, modalProps }) {

    if (!this.props.modalTypes.hasOwnProperty(modalType)) {
      return;
    }

    let ModalComponent = this.props.modalTypes[modalType];
    
    return <ModalComponent key={modalType} modalConfig={ { ...this.props.config, level:level }} {...modalProps} />;
  }

  render() {

    if (!this.props.activeModals || this.props.activeModals.length < 1) {
      return null;
    }

    return (
      <div>
        {this.props.activeModals.map(modal => this.renderModalComponent(modal))}
      </div>
    );
    
  }
}

export default connect(state => state.modals)(ModalFactory);