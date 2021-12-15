import React, { useContext } from "react";
import { NumInput, TimerDisplay, } from "../generic";
import { TimerContainer, Header, RunTimer, SetTimer, InputDisplay, ButtonGroup,  Celebrate,} from "../../utils/containers";
import { Title, Subtitle, Message, Caption, Emoji} from "../../utils/headings";
import { StartButton, StopButton, ResetButton, PauseButton } from "../generic/Button";
import AppContext from "../../context/app-context";
import { formatHours, formatMinutes, formatSeconds, } from "../../utils/helpers";

const Stopwatch = ( props ) => {

const { mode, currentTime, hours, minutes, seconds, isRunning, onStop, togglePause, onStartStopwatch, handleRepeatTimer, handleChangeSec, handleChangeMinutes, handleChangeHours,  } = useContext( AppContext );

  return (
    <TimerContainer>
      <Header><Title>Stopwatch</Title></Header>
      <RunTimer visible={mode === "run"}>
        <TimerDisplay 
          hours={ formatHours( currentTime ) } 
          minutes={ formatMinutes( currentTime ) }
          seconds={ formatSeconds( currentTime ) } />
        </RunTimer>
      <SetTimer visible={(mode === "specify")}>
        <Subtitle>Set Timer</Subtitle>
        <InputDisplay >
          <NumInput id="hours" name="hours" min="0" max="12" label="Hours" value={hours} 
           onChange={ handleChangeHours } 
          />
          <NumInput id="minutes" name="minutes" min="0" max="59" label="Minutes" value={minutes} onChange={ handleChangeMinutes } 
          />
          <NumInput id="seconds" name="seconds" min="0" max="59" label="Seconds" value={seconds} onChange={ handleChangeSec } />
        </InputDisplay>
      </SetTimer>
      <Celebrate visible={( mode === "celebrate")}>
        <Message>YAY!</Message>
        <Caption>You did it.</Caption>
        <Emoji >😀</Emoji>
      </Celebrate>
      <ButtonGroup>
        <StartButton visible={(mode === "specify")} onClick={onStartStopwatch} label="Start" />
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


export default Stopwatch;
