import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppProvider";
import { NumInput } from "../components/generic";
import { NavButton } from "../components/generic";
import {
  Container,
  AltHeader,
  InputDisplay,
  InputGroup,
  TimerContainer,
  ButtonGroup,
  SelectContainer,
  Nav,
} from "../utils/containers";
import { Title, Heading } from "../utils/headings";
import { StartButton, ResetButton } from "../components/generic/Button";

const AddTimer = () => {
  const { createTimer, timerQueue, deleteTimer, sumTimers, workoutLength } =
    useContext(AppContext);
  // set by user
  const [timerType, setTimerType] = useState("stopwatch");
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [restSeconds, setRestSeconds] = useState(0);
  const [restMinutes, setRestMinutes] = useState(0);
  const [rounds, setRounds] = useState(1);

  let timerSettingInputs;

  if (timerType === "tabata") {
    timerSettingInputs = (
      <InputDisplay>
        <InputGroup>
          <Heading>Work Interval</Heading>
          <NumInput
            id="minutes"
            name="minutes"
            min="0"
            max="59"
            label="Minutes"
            value={minutes}
            onChange={(e) => setMinutes(parseInt(e.target.value))}
          />
          <NumInput
            id="seconds"
            name="seconds"
            min="0"
            max="59"
            label="Seconds"
            value={seconds}
            onChange={(e) => setSeconds(parseInt(e.target.value))}
          />
        </InputGroup>
        <InputGroup title="Rest Interval">
          <Heading>Rest Interval</Heading>
          <NumInput
            id="restMinutes"
            name="restMinutes"
            min="0"
            max="59"
            label="Minutes"
            value={restMinutes}
            onChange={(e) => setRestMinutes(parseInt(e.target.value))}
          />
          <NumInput
            id="restSeconds"
            name="restSeconds"
            min="0"
            max="59"
            label="Seconds"
            value={restSeconds}
            onChange={(e) => setRestSeconds(parseInt(e.target.value))}
          />
        </InputGroup>
        <InputGroup>
          <Heading>Rounds</Heading>
          <NumInput
            id="rounds"
            name="rounds"
            min="1"
            max="12"
            label="Number"
            value={rounds}
            onChange={(e) => setRounds(parseInt(e.target.value))}
          />
        </InputGroup>
      </InputDisplay>
    );
  } else if (timerType === "xy") {
    timerSettingInputs = (
      <InputDisplay>
        <InputGroup>
          <Heading>Rounds</Heading>
          <NumInput
            id="rounds"
            name="rounds"
            min="1"
            max="12"
            label="Number"
            value={rounds}
            onChange={(e) => setRounds(parseInt(e.target.value))}
          />
        </InputGroup>
        <InputGroup>
          <Heading>Time Per Round</Heading>
          <NumInput
            id="hours"
            name="hours"
            min="0"
            max="12"
            label="Hours"
            value={hours}
            onChange={(e) => setHours(parseInt(e.target.value))}
          />
          <NumInput
            id="minutes"
            name="minutes"
            min="0"
            max="59"
            label="Minutes"
            value={minutes}
            onChange={(e) => setMinutes(parseInt(e.target.value))}
          />
          <NumInput
            id="seconds"
            name="seconds"
            min="0"
            max="59"
            label="Seconds"
            value={seconds}
            onChange={(e) => setSeconds(parseInt(e.target.value))}
          />
        </InputGroup>
      </InputDisplay>
    );
  } else {
    // countdown or stopwatch
    timerSettingInputs = (
      <InputDisplay>
        <NumInput
          id="hours"
          name="hours"
          min="0"
          max="12"
          value={hours}
          label="Hours"
          onChange={(e) => setHours(parseInt(e.target.value))}
        />
        <NumInput
          id="minutes"
          name="minutes"
          min="0"
          max="59"
          label="Minutes"
          value={minutes}
          onChange={(e) => setMinutes(parseInt(e.target.value))}
        />
        <NumInput
          id="seconds"
          name="seconds"
          min="0"
          max="59"
          label="Seconds"
          value={seconds}
          onChange={(e) => setSeconds(parseInt(e.target.value))}
        />
      </InputDisplay>
    );
  }
  return (
    <Container>
      <Nav>
        {timerQueue.map((timer) => (
          <NavButton
            key={timer.id}
            onClick={() => deleteTimer(timer.id)}
            label={timer.timerType}
          />
        ))}
        <p>Total workout time: {workoutLength}</p>
      </Nav>
      <TimerContainer>
        <AltHeader>
          <Title>Add a Timer</Title>
        </AltHeader>
        <form>
          <SelectContainer>
            <select
              id="type"
              value={timerType}
              onChange={(e) => setTimerType(e.target.value)}
            >
              <option value="stopwatch">Stopwatch</option>
              <option value="countdown">Countdown</option>
              <option value="xy">XY</option>
              <option value="tabata">Tabata</option>
            </select>
          </SelectContainer>
          {timerSettingInputs}
        </form>
        <ButtonGroup>
          <StartButton label="Done" />
          <ResetButton label="Clear" />
          <StartButton
            visible
            onClick={() => {
              createTimer({
                timerType,
                seconds,
                minutes,
                hours,
                restSeconds,
                restMinutes,
                rounds,
              });
              sumTimers();
            }}
            label="Add"
          />
        </ButtonGroup>
      </TimerContainer>
    </Container>
  );
};

export default AddTimer;
