import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppProvider";
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
// import XY from "../components/timers/XY";
// import Tabata from "../components/timers/Tabata";
import { NavButton } from "../components/generic";
import { Container, Nav } from "../utils/containers";
import { StartButton } from "../components/generic/Button";

function TimersView() {
  const {
    timerQueue,
    totalWorkoutLength,
    setCurrentTime,
    currentTime,
    currentTimerIndex,
    setCurrentTimerIndex,
    renderTimer,
  } = useContext(AppContext);

  return (
    <Container>
      <Nav>
        {timerQueue.length > 0 &&
          timerQueue.map((timer) => (
            <NavButton key={timer.id} id={timer.id} label={timer.timerType} />
          ))}
        <p>Total workout time (seconds): {totalWorkoutLength} </p>
        <StartButton
          visible
          onClick={() => {
            console.log("start timer", currentTimerIndex);
            timerQueue[currentTimerIndex].isRunning = true;
          }}
          label="Start Workout"
        />
      </Nav>
      {renderTimer(timerQueue[currentTimerIndex])}
    </Container>
  );
}

export default TimersView;
