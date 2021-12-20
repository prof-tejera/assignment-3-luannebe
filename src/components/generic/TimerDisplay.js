import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme, fontWeight,  } from "../../utils";
import { rem } from 'polished';

const Container = styled.div`
  display: block;
  width: auto;
  height: ${rem('80px')};
  margin: 0 10px 38px;
  color: ${theme.lightTextColor};
  font-family: ${theme.displayFont};
  font-size: ${rem('60px')};
  font-weight: ${fontWeight.regular};
  line-height: ${rem('80px')};
  text-align:  center;
  background-color: ${theme.darkBackground};
  border-radius: 9px;
`;

export const TimerDisplay = (props) => {

  const { time } = props;

  let h = Math.floor( time / 3600 );
  h = h.toString();  
  h = (h.length < 2) ? "0" + h : h;

  let m = Math.floor(( time % 3600) / 60);
  m = m.toString();  
  m = (m.length < 2) ? "0" + m : m;

  let s = Math.floor(time % 60);
  s = s.toString();  
  s = (s.length < 2) ? "0" + s : s; 

  return (
    <Container>{h}:{m}:{s}</Container>
  );
}

TimerDisplay.propTypes = {
  time: PropTypes.number,
};

TimerDisplay.defaultProps = {
  time: 0
};


