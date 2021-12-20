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

const Countdown = () => {
  const { currentTime, onPause, isRunning, goToNextTimer } =
    useContext(AppContext);

  return (
    <TimerContainer>
      <Header>
        <Title>Countdown</Title>
      </Header>
      <RunTimer visible>
        <TimerDisplay time={currentTime} />
      </RunTimer>
      <ButtonGroup>
        <PauseButton
          visible
          onClick={onPause}
          label={isRunning ? "Pause" : "Resume"}
        />
        <StartButton visible label="Next" onClick={goToNextTimer} />
      </ButtonGroup>
    </TimerContainer>
  );
};
export default Countdown;
