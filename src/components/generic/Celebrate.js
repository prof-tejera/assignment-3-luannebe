import React, { useContext } from "react";
import { NumInput  } from "../generic";
import PropTypes from "prop-types";
import styled from "styled-components";
import AppContext from "../../context/app-context";

Container = styled.div`
  display: ${(props) => props.visible ? "block" : "none"};
  width: auto;
  height: auto;
  padding-top: 20px;
  padding-bottom: 20px
  overflow: hidden;
  position: relative;
`;

export Celebrate = ( props ) => {

    const { hours, minutes, seconds, handleChangeHours, handleChangeMinutes, handleChangeSec  } = useContext( AppContext );

  return (
    <Container>
        <NumInput id="hours" name="hours" min="0" max="12" label="Hours" value={hours} 
            onChange={ handleChangeHours } 
         />
        <NumInput id="minutes" name="minutes" min="0" max="59" label="Minutes" value={minutes} 
            onChange={ handleChangeMinutes } 
        />
        <NumInput id="seconds" name="seconds" min="0" max="59" label="Seconds" value={seconds} 
            onChange={ handleChangeSec } />
    </Container> 
  );
}









