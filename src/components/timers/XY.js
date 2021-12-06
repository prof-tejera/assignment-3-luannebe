import React, { useContext } from "react";
import { NumInput, InputTime, TimerDisplay, Rounds} from "../generic";
import { TimerContainer, Header, RunTimer, SetTimer, InputDisplay, InputGroup, ButtonGroup, Celebrate, } from "../../utils/containers";
import { Title, Subtitle, Heading, Message, Caption, Emoji   } from "../../utils/headings";
import { StartButton, StopButton, ResetButton, PauseButton } from "../generic/Button";
import AppContext from "../../context/app-context";

const XY = ( ) => {

  const { mode, currentTime, currentRound, rounds, isRunning, onStartXY, onStop, togglePause, handleRepeatTimer, handleChangeRounds } = useContext( AppContext );

  return (
    <TimerContainer>
      <Header><Title>XY</Title></Header>
      <RunTimer visible={mode === "run"}>
        <TimerDisplay time={currentTime} />
        <Rounds currentRound={currentRound} totalRounds={rounds} />
      </RunTimer>
      <SetTimer visible={ mode === "specify" }>
        <Subtitle>Set Timer</Subtitle>
        <InputDisplay>
          <InputGroup>
            <Heading>Rounds</Heading>                   
            <NumInput id="rounds" name="rounds" min="1" max="12" label="Number" value={rounds} onChange={ handleChangeRounds }/>
          </InputGroup>
          <InputGroup>
            <Heading>Time Per Round</Heading> 
            <InputTime />
          </InputGroup>
        </InputDisplay>
      </SetTimer>
      <Celebrate visible={( mode === "celebrate")}>
        <Message>YAY!</Message>
        <Caption>Celebrate.</Caption>
        <Emoji id="dancing">😀</Emoji>
      </Celebrate>
      <ButtonGroup>
        <StartButton visible={(mode === "specify")} onClick={onStartXY} label="Start" />
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

export default XY;

