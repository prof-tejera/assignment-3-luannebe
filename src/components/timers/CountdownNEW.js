import React, { useContext } from "react";
import { InputTime, TimerDisplay } from "../generic";
import {
  TimerContainer,
  Header,
  RunTimer,
  SetTimer,
  ButtonGroup,
  Celebrate,
} from "../../utils/containers";
import { Title, Subtitle, Message, Caption, Emoji } from "../../utils/headings";
import {
  StartButton,
  StopButton,
  ResetButton,
  PauseButton,
} from "../generic/Button";
import AppContext from "../../context/app-context";

const Countdown = () => {
  const {
    mode,
    currentTime,
    isRunning,
    onStart,
    onStop,
    togglePause,
    handleRepeatTimer,
  } = useContext(AppContext);

  return (
    <TimerContainer>
      <Header>
        <Title>Countdown</Title>
      </Header>
      <RunTimer visible={mode === "run"}>
        <TimerDisplay time={currentTime} />
      </RunTimer>
      <SetTimer visible={mode === "specify"}>
        <Subtitle>Set Timer</Subtitle>
        <InputDisplay>
          <NumInput
            id="hours"
            name="hours"
            min="0"
            max="12"
            value={hours}
            label="Hours"
            onChange={handleChangeHours}
          />
          <NumInput
            id="minutes"
            name="minutes"
            min="0"
            max="59"
            label="Minutes"
            value={minutes}
            onChange={handleChangeMinutes}
          />
          <NumInput
            id="seconds"
            name="seconds"
            min="0"
            max="59"
            label="Seconds"
            value={seconds}
            onChange={handleChangeSec}
          />
        </InputDisplay>
      </SetTimer>
      <Celebrate visible={mode === "celebrate"}>
        <Message>YAY!</Message>
        <Caption>Happy Dance.</Caption>
        <Emoji celebrating={mode === "celebrate"}>😀</Emoji>
      </Celebrate>
      <ButtonGroup>
        <StartButton
          visible={mode === "specify"}
          onClick={onStart}
          label="Start"
        />
        <StopButton visible={mode === "run"} onClick={onStop} label="Done" />
        <PauseButton
          visible={mode === "run"}
          onClick={togglePause}
          label={isRunning ? "Pause" : "Resume"}
        />
        <ResetButton
          visible={mode === "run" && isRunning === false}
          label="Reset"
          onClick={handleRepeatTimer}
        />
        <StartButton
          visible={mode === "celebrate"}
          label="Repeat"
          onClick={handleRepeatTimer}
        />
      </ButtonGroup>
    </TimerContainer>
  );
};
export default Countdown;