import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal, { actions } from 'react-redux-modals';
import Button from './button';
import './modal.css';

class ModalStrict extends Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.hideModal('MODAL_STRICT');
  }

  render() {
    return (
      <Modal config={this.props.modalConfig} handleEscape={false}>
        <div className="modal-body formal">
          <h3>Strict Modal - Forced Closure</h3>
          <div className="body-wrap">
            <p>
              You must use one of the close buttons to close this modal.
              Escaping will not work.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque vel sollicitudin risus. Integer tempus tincidunt
              elit, ut fringilla purus convallis a. Ut sit amet finibus turpis.
            </p>
          </div>

          <div className="button-bar">
            <Button componentStyle="blue" onClick={this.handleClose}>
              Close
            </Button>
          </div>
          <button className="close" onClick={this.handleClose} type="button">
            <svg
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              role="presentation"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              <path fill="none" d="M0 0h24v24H0z" />
            </svg>
          </button>
        </div>
      </Modal>
    );
  }
}

export default connect(
  null,
  actions,
)(ModalStrict);
