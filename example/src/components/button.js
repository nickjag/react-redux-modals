import React from 'react';
import styled from 'styled-components';

const BaseButton = styled.button`
  display: inline-block;
  min-width: 64px;
  padding: 10px 8px;
  margin: 0 5px;
  text-align: center;
  border-radius: 4px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 13px;
  transition: background 0.3s ease;
  color: rgba(0, 0, 0, 0.87);
  text-transform: uppercase;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  user-select: none;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const BlueButton = styled(BaseButton)`
  color: #2196f3;
  border: none;

  &:hover {
    background: rgba(33, 150, 243, 0.08);
  }
`;

const buttonStyles = {
  default: BaseButton,
  blue: BlueButton,
};

const Button = props => {
  const { componentStyle = 'default', onClick } = props;

  const ButtonStyle = buttonStyles[componentStyle] || buttonStyles.default;

  return <ButtonStyle onClick={onClick}>{props.children}</ButtonStyle>;
};

export default Button;
