import React, { useContext } from "react";
import { TimerDisplay } from "../generic";
import {
  TimerContainer,
  Header,
  RunTimer,
  ButtonGroup,
  Celebrate,
} from "../../utils/containers";
import { Title, Message, Caption, Emoji } from "../../utils/headings";
import { StartButton, PauseButton } from "../generic/Button";
import { AppContext } from "../../context/AppProvider";

const Countdown = () => {
  const { currentTime, onPause, isRunning, timeToCelebrate } =
    useContext(AppContext);

  return (
    <TimerContainer>
      <Header>
        <Title>Countdown</Title>
      </Header>
      <RunTimer visible={false}>
        <TimerDisplay time={currentTime} />
      </RunTimer>
      <Celebrate visible={true}>
        <Message>YAY!</Message>
        <Caption>Happy Dance.</Caption>
        <Emoji celebrating={true}>😀</Emoji>
      </Celebrate>
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
export default Countdown;
