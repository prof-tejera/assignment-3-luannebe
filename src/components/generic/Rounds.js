import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme, typeScale, fontWeight } from "../../utils";

const H3 = styled.h3`
  margin: 1.2rem auto;
  padding: 0 auto;
  color: ${theme.mediumTextColor}; 
  font-family: ${theme.primaryFont};
  font-size: ${typeScale.header3} ;
  font-weight: ${fontWeight.bold};
  text-transform: none;
  text-align: center;

  span {
    font-weight: ${fontWeight.light}
  }
} 
`;

export const Rounds = (props) => {

  const { currentRound, totalRounds } = props;
  return (
    <H3>Round {currentRound} <span>of</span> {totalRounds}</H3>
  );
}


Rounds.propTypes = {
  currentRound: PropTypes.number,
  totalRounds: PropTypes.number,
};

export default Rounds;