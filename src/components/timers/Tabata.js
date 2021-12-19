import React, { useContext } from "react";
import { Rounds, TimerDisplay } from "../generic";
import {
  TimerContainer,
  Header,
  RunTimer,
  Cycle,
  ButtonGroup,
} from "../../utils/containers";
import { Title } from "../../utils/headings";
import { WorkPeriod, RestPeriod } from "../generic/Period";
import { StartButton, PauseButton } from "../generic/Button";
import { AppContext } from "../../context/AppProvider";

const Tabata = () => {
  const {
    currentTime,
    currentRound,
    onPause,
    isRunning,
    rounds,
    isRestPeriod,
    goToNextTimer,
  } = useContext(AppContext);

  return (
    <TimerContainer>
      <Header>
        <Title>Tabata</Title>
      </Header>
      <RunTimer>
        <TimerDisplay time={currentTime} />
        <Rounds currentRound={currentRound} totalRounds={rounds} />
        <Cycle>
          <WorkPeriod currentPeriod={!isRestPeriod}>Work</WorkPeriod>
          <RestPeriod currentPeriod={isRestPeriod}>Rest</RestPeriod>
        </Cycle>
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

export default Tabata;
