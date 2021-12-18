import React, { useContext } from "react";
import { TimerDisplay, Rounds } from "../generic";
import {
  TimerContainer,
  Header,
  RunTimer,
  ButtonGroup,
} from "../../utils/containers";
import { Title } from "../../utils/headings";
import { StartButton, PauseButton } from "../generic/Button";
import { AppContext } from "../../context/AppProvider";

const XY = () => {
  const { currentTime, currentRound, onPause, isRunning, rounds } =
    useContext(AppContext);

  return (
    <TimerContainer>
      <Header>
        <Title>XY</Title>
      </Header>
      <RunTimer>
        <TimerDisplay time={currentTime} />
        <Rounds currentRound={currentRound} totalRounds={rounds} />
      </RunTimer>
      <ButtonGroup>
        <PauseButton
          visible
          onClick={onPause}
          label={isRunning ? "Pause" : "Resume"}
        />
        <StartButton visible label="Next" />
      </ButtonGroup>
    </TimerContainer>
  );
};

export default XY;
