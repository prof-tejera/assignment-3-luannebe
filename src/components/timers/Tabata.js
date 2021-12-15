import React, { useContext } from "react";
import AppContext from "../../context/app-context";
import { NumInput, Rounds, TimerDisplay,  } from "../generic";
import { TimerContainer, Header, RunTimer, SetTimer, InputDisplay,InputGroup, Cycle, ButtonGroup, Celebrate, } from "../../utils/containers";
import { Title,  Subtitle, Heading, Message, Caption, Emoji } from "../../utils/headings";
import { WorkPeriod, RestPeriod } from "../generic/Period";
import { StartButton, StopButton, ResetButton, PauseButton } from "../generic/Button";
import { formatHours, formatMinutes, formatSeconds, } from "../../utils/helpers";

const Tabata = () => {
  const { mode, currentTime, currentRound, minutes, seconds, restMinutes, restSeconds, rounds, isRunning, isRestPeriod, onStartTabata, onStop, togglePause, handleRepeatTimer, handleChangeSec, handleChangeMinutes, handleChangeRestMinutes, handleChangeRestSec, handleChangeRounds } = useContext( AppContext );

  return (
    <TimerContainer>
      <Header><Title>Tabata</Title></Header>
      <RunTimer visible={mode === "run"} >
        <TimerDisplay 
          hours={ formatHours( currentTime ) } 
          minutes={ formatMinutes( currentTime ) }
          seconds={ formatSeconds( currentTime ) } />
        <Rounds currentRound={currentRound} totalRounds={rounds} />
        <Cycle>
          <WorkPeriod currentPeriod={!isRestPeriod}>Work</WorkPeriod>
          <RestPeriod currentPeriod={isRestPeriod}>Rest</RestPeriod>
        </Cycle>
      </RunTimer>

      <SetTimer visible={ mode === "specify" }>
        <Subtitle>Set Timer</Subtitle>
        <InputDisplay >
          <InputGroup>
            <Heading>Work Interval</Heading>
            <NumInput id="minutes" name="minutes" min="0" max="59" label="Minutes" value={minutes} onChange={ handleChangeMinutes }/>
            <NumInput id="seconds" name="seconds" min="0" max="59" label="Seconds" value={seconds} onChange={ handleChangeSec }/>
          </InputGroup>
          <InputGroup title="Rest Interval">
            <Heading>Rest Interval</Heading>
            <NumInput id="restMinutes" name="restMinutes" min="0" max="59" label="Minutes" value={restMinutes} onChange={ handleChangeRestMinutes }/>
            <NumInput id="restSeconds" name="restSeconds" min="0" max="59" label="Seconds" value={restSeconds} onChange={ handleChangeRestSec }/>
          </InputGroup> 
          <InputGroup> 
            <Heading>Rounds</Heading>                  
            <NumInput id="rounds" name="rounds" min="1" max="12" label="Number" value={rounds} onChange={ handleChangeRounds }/>
          </InputGroup>           
        </InputDisplay>
      </SetTimer>
      <Celebrate visible={( mode === "celebrate")}>
        <Message>YAY!</Message>
        <Caption>Well done.</Caption>
        <Emoji id="dancing">😀</Emoji>
      </Celebrate>
      <ButtonGroup>
        <StartButton visible={(mode === "specify")} onClick={onStartTabata} label="Start" />
        <StopButton visible={(mode === "run")} onClick={onStop} label="Done" />
        <PauseButton 
          visible={(mode === "run")} 
          onClick={togglePause} 
          label={( isRunning ) ? "Pause" : "Resume" }
         />
        <ResetButton visible={(mode === "run") && (isRunning === false)} label="Reset" onClick={handleRepeatTimer} />
        <StartButton visible={(mode === "celebrate")} label="Repeat" onClick={handleRepeatTimer} />
      </ButtonGroup>
    </TimerContainer>
  );
}

export default Tabata;

