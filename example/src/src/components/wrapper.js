import React, { Component } from 'react';
import styled  from 'styled-components';

const overlayIndex = 4;
const wrapperIndex = 5;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(68, 68, 68, .8);
  z-index: ${props => props.zIndex};
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  text-align: center;
  overflow-y: scroll;
  overflow-scrolling: touch;
  padding: 0;
  z-index: ${props => props.zIndex};
  
  ${'' /* ${props => props.hasEscape && css`
    cursor: pointer;
  `} */}
`;

const Container = styled.div`
  position: absolute;
  width: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  outline: 0;
  display: inline-block;
  cursor: default;
  background: #fff;

  @media (min-width: 768px) {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
}
`;

const Close = styled.div`
  display: block;
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  background-image: url('/assets/img/icon-close-gray-round.svg');
  background-size: 32px 32px;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
`;

export default class Modal extends Component {
  constructor(props) {

    super(props);
    this.onCloseClick = this.onCloseClick.bind(this);
    this.onWrapperClick = this.onWrapperClick.bind(this);
  }

  listenKeyboard(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
      this.props.handleEscape();
    }
  };

  componentDidMount () {
    if (this.props.handleEscape) {
      window.addEventListener('keydown', this.listenKeyboard.bind(this), true);
    }
  }
  
  componentWillUnmount () {
    if (this.props.handleEscape) {
      window.removeEventListener('keydown', this.listenKeyboard.bind(this), true);
    }
  }

  // prevent modal clicks from propagating to wrapper/escape clicks
  onDialogClick(event) {
    event.stopPropagation();
  };

  // check/handle escape (outside of modal) closing
  onWrapperClick() {
    if (this.props.handleEscape) {
      this.props.handleEscape();
    }
  };

  // handle closing the mdoal
  onCloseClick() {
    this.props.handleClose();
  }

  render () {
    return (
        <div>
          <Wrapper onClick={this.onWrapperClick} zIndex={wrapperIndex + this.props.level} >
            <Container onClick={this.onDialogClick}>
              {this.props.children}
              {this.props.handleClose && <Close onClick={this.onCloseClick} />}
            </Container>
          </Wrapper>
          <Overlay zIndex={overlayIndex + this.props.level} />
        </div>
    );
  }
  
}
