import React, { useContext } from "react";
import { TimerDisplay } from "../generic";
import {
  TimerContainer,
  Header,
  RunTimer,
  ButtonGroup,
} from "../../utils/containers";
import { Title } from "../../utils/headings";
import {
  StartButton,
  StopButton,
  ResetButton,
  PauseButton,
} from "../generic/Button";
import { AppContext } from "../../context/AppProvider";
import { formatHours, formatMinutes, formatSeconds } from "../../utils/helpers";

const Stopwatch = () => {
  const { currentTimer, currentTime, togglePause } = useContext(AppContext);

  return (
    <TimerContainer>
      <Header>
        <Title>Stopwatch</Title>
      </Header>
      <RunTimer>
        <TimerDisplay
          hours={formatHours(currentTime)}
          minutes={formatMinutes(currentTime)}
          seconds={formatSeconds(currentTime)}
        />
      </RunTimer>
      <ButtonGroup>
        {/* <PauseButton
          visible
          onClick={togglePause}
          label={currentTimer.isRunning ? "Pause" : "Resume"}
        /> */}
        <StartButton visible label="Next" />
      </ButtonGroup>
    </TimerContainer>
  );
};

export default Stopwatch;
