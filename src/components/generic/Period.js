import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme, fontWeight, typeScale } from "../../utils";
import { lighten } from 'polished';

const StyledPeriod = styled.div`
  height: auto;
  min-width: 30%;
  padding: .35em 1em;
  border-width: 1px;
  border-style: solid;
  text-align: center;
  color: ${(props) => props.currentPeriod ? theme.lightTextColor : lighten(0.4, (theme.mediumTextColor)) };
  border-color: ${theme.secondaryColor};
  font-family: ${theme.primaryFont};
  font-size: ${typeScale.header5};
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
  border-width: 1px;
`;

export const WorkPeriod = styled(StyledPeriod) `
  border-radius: 3px 0 0 3px;
  background: ${(props) => props.currentPeriod ? theme.hotGradient : theme.neutralBackground };
`;

export const RestPeriod = styled(StyledPeriod) `
  border-radius: 0 3px 3px 0;
  background: ${(props) => props.currentPeriod ? theme.coolGradient : theme.neutralBackground };
`;

export const Period = () => {
  const { isCurrentPeriod } = this.props;
  return (
    <div currentPeriod={isCurrentPeriod} />
  );
}


Period.propTypes = {
  isCurrentPeriod: PropTypes.bool,
};

export default Period;


