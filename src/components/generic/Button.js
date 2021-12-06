import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme, fontWeight, typeScale } from "../../utils";
import { darken, rem } from 'polished';

const Button = (props) => {
 
  const { className, onClick, label }  = props;

  return (
    <button 
      onClick={onClick}
      className={className} >
      {label}
    </button>
  );
}

const StyledButton = styled(Button)`
  display: ${(props) => props.visible ? "block" : "none"};
  height: 40px;
  width: ${rem('100px')};
  margin: 6px;
  border-width: 0;
  border-radius: 40px;
  filter: ${theme.dropShadow};
  color: ${theme.lightTextColor};
  font-family: ${theme.primaryFont};
  font-size: ${typeScale.header5};
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    filter: ${theme.dropShadowOnHover};
  }
`;

export const StartButton = styled(StyledButton) `
  background-color: ${theme.startColor};

  &:hover {
    background-color: ${darken('0.1', theme.startColor)};
  }

`;

export const StopButton = styled(StyledButton) `
  background-color: ${theme.stopColor};

  &:hover {
    background-color: ${darken('0.1', theme.stopColor)};
  }
`;

export const ResetButton = styled(StyledButton) `
  background-color: ${theme.resetColor};

  &:hover {
    background-color: ${darken('0.1', theme.resetColor)};
  }
`;

export const PauseButton = styled(StyledButton) `
  background-color: ${theme.pauseColor};

  &:hover {
    background-color: ${darken('0.1', theme.pauseColor)};
  }
`;


Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};


export default Button;

