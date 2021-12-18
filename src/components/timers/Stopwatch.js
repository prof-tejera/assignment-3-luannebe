import React, { useContext } from "react";
import { TimerDisplay } from "../generic";
import {
  TimerContainer,
  Header,
  RunTimer,
  ButtonGroup,
} from "../../utils/containers";
import { Title } from "../../utils/headings";
import { StartButton, PauseButton } from "../generic/Button";
import { AppContext } from "../../context/AppProvider";

const Stopwatch = () => {
  const { currentTime, onPause, isRunning } = useContext(AppContext);

  return (
    <TimerContainer>
      <Header>
        <Title>Stopwatch</Title>
      </Header>
      <RunTimer>
        <TimerDisplay time={currentTime} />
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

export default Stopwatch;
