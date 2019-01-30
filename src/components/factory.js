import React, { Component } from 'react';
import { connect } from 'react-redux';

class ModalFactory extends Component {
  
  renderModalComponent({ type, level, props }) {

    if (!this.props.modalTypes.hasOwnProperty(type)) {
      return;
    }

    let ModalComponent = this.props.modalTypes[type];
    
    return <ModalComponent key={type} modalConfig={ { ...this.props.config, level:level }} {...props} />;
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