import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme, fontWeight, typeScale } from "../../utils";
import { rem } from "polished";

const StyledListItem = styled.div`
  line-height: ${rem("40px")};
  width: ${rem("150px")};
  margin: 0.5rem auto;
  border-width: 3px;
  border-radius: 0;
  color: ${(props) =>
    props.active ? theme.lightTextColor : theme.primaryColor};
  background-color: ${(props) =>
    props.active ? theme.primaryColor : theme.lightBackground};
  //border-color: ${theme.primaryColor};
  //color: ${theme.primaryColor};
  font-family: ${theme.primaryFont};
  font-size: ${typeScale.small};
  font-weight: ${fontWeight.light};

  text-transform: none;
`;

export const StaticListItem = (props) => {
  const { label, id } = props;

  return <StyledListItem id={id}>{label}</StyledListItem>;
};

StaticListItem.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};
