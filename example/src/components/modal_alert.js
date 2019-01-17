import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal, { actions } from '../src/';
import './modal.css';

class ModalAlert extends Component {
    
    handleCancel() {
      this.props.hideModal('MODAL_ALERT');
    }

    render() {
      console.log('check level', this.props.level);
        return (
            <Modal 
                level={this.props.level}
                handleClose={false} 
                handleEscape={this.handleCancel.bind(this)}>

                <div className="modal-body padded small">
                    <h2>Success!</h2>
                </div>
            </Modal>
        );
    }
}

export default connect(null, actions)(ModalAlert);