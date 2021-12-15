import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme, fontWeight, typeScale } from "../../utils";
import { rem } from "polished";

export const NavButton = (props) => {
  const { onClick, label } = props;

  return <Button onClick={onClick}>{label}</Button>;
};

const Button = styled.button`
  height: 40px;
  width: ${rem("150px")};
  margin: 1rem auto;
  border-width: 1px;
  border-radius: 0;
  border-color: ${theme.primaryColor};
  color: ${theme.primaryColor};
  font-family: ${theme.primaryFont};
  font-size: ${typeScale.small};
  font-weight: ${fontWeight.light};
  background-color: ${theme.lightBackground};
  text-transform: None;
  cursor: pointer;

  &:hover {
    background-color: ${theme.mediumBackground};
    text-decoration: line-through;
  }
`;

NavButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};
