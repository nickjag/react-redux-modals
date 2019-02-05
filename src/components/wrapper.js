import React, { Component } from 'react';
import styled, { keyframes }  from 'styled-components';

const modalFadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const AnimatedFixed = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${props => props.zIndex};
  opacity: ${props => props.animate && props.fadeIn ? 0 : 1};
  animation-name: ${props => props.animate && props.fadeIn ? modalFadeIn : "none"};
  animation-duration: .3s;
  animation-timing-function: cubic-bezier(.8, -0.49, .36, 1);
  animation-fill-mode: forwards;
  animation-delay: 0s;
`;

const Overlay = styled(AnimatedFixed)`
  height: 100%;
  width: 100%;
  background-color: rgba(68, 68, 68, .8);
`;

const Wrapper = styled(AnimatedFixed)`
  overflow: auto;
  text-align: center;
  overflow-scrolling: touch;
  padding: 0;
  animation-delay: .2s;
`;

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: auto;
  top: 50%;
  transform: translateY(-50%);
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  outline: 0;
  cursor: default;
  background: transparent;
`;

export default class Modal extends Component {
  constructor(props) {

    super(props);
    this.onWrapperClick = this.onWrapperClick.bind(this);
    this.listenKeyboard = this.listenKeyboard.bind(this);
  }

  listenKeyboard(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
      this.props.handleEscape();
    }
  };

  componentDidMount () {
    if (this.props.handleEscape) {
      window.addEventListener('keydown', this.listenKeyboard, true);
    }
  }
  
  componentWillUnmount () {
    if (this.props.handleEscape) {
      window.removeEventListener('keydown', this.listenKeyboard, true);
    }
  }

  onContainerClick(e) {
    e.stopPropagation();
  };
  
  onWrapperClick() {
    if (this.props.handleEscape) {
      this.props.handleEscape();
    }
  };

  render () {

    const { config, animate=false, fadeIn=true } = this.props;

    const zIndex = config.zIndex || 1000;

    return (
        <div>
          <Wrapper className={`modal-wrapper ${animate && 'animate'}`} onClick={this.onWrapperClick} zIndex={parseInt(zIndex + config.level + 1)} animate={animate} fadeIn={fadeIn}>
            <Container className="modal-container" onClick={this.onContainerClick}>
              {this.props.children}
            </Container>
          </Wrapper>
          <Overlay className={`modal-overlay ${animate && 'animate'}`} zIndex={parseInt(zIndex + config.level)} animate={animate} fadeIn={fadeIn} />
        </div>
    );
  }
}
