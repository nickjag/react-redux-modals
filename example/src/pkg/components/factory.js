import React, { Component } from 'react';
import { connect } from 'react-redux';

class ModalFactory extends Component {

  componentWillReceiveProps(nextProps) {
    console.log('testing next props rr2', nextProps);
	}
  
  renderModalComponent({ type, level, props }) {

    if (!this.props.modalTypes.hasOwnProperty(type)) {
      return;
    }

    let ModalComponent = this.props.modalTypes[type];

    console.log('please do render asdf', type);
    
    
    return <ModalComponent key={type} modalConfig={ { ...this.props.config, level:level }} {...props} />;
  }

  render() {

    console.log('set 1', this.props);

    if (!this.props.activeModals || this.props.activeModals.length < 1) {
      return null;
    }

    console.log('set 2');

    return (
      <div>
        {this.props.activeModals.map(modal => this.renderModalComponent(modal))}
      </div>
    );
    
  }
}

export default connect(state => state.modals)(ModalFactory);
