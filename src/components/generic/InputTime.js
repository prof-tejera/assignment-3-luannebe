import React from "react";
import { NumInput } from "../generic";
import styled from "styled-components";

const Container = styled.div`
  width: auto;
  height: auto;
  margin: 0 auto;
  text-align: center;
`;

export const InputTime = (props) => {
  const { currentRound, totalRounds } = props;

  return (
    <Container>
      <p>This would be place for inputting time.</p>
      {/* <NumInput id="hours" name="hours" min="0" max="12" label="Hours" value={hours} 
            onChange={ handleChangeHours } 
         />
        <NumInput id="minutes" name="minutes" min="0" max="59" label="Minutes" value={minutes} 
            onChange={ handleChangeMinutes } 
        />
        <NumInput id="seconds" name="seconds" min="0" max="59" label="Seconds" value={seconds} 
            onChange={ handleChangeSec } /> */}
    </Container>
  );
};
