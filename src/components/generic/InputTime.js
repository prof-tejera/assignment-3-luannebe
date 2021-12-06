import React, { useContext } from "react";
import { NumInput  } from "../generic";
import PropTypes from "prop-types";
import styled from "styled-components";
import AppContext from "../../context/app-context";

const Container = styled.div`
    width: auto;
    height: auto;
    margin: 0 auto ;
    text-align: center;
`; 

export const InputTime = ( props ) => {

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









