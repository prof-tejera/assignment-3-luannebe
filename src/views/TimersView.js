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
  const { timerQueue, totalWorkoutLength, onStart, getCurrentTimer } =
    useContext(AppContext);

  const renderTimer = () => {
    const currentTimer = getCurrentTimer();
    if (!currentTimer) return null;

    switch (currentTimer.timerType) {
      case "stopwatch":
        return <Stopwatch />;
      case "countdown":
        return <Countdown />;
      default:
        return <Stopwatch />;
    }
  };

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
            // console.log("start timer", currentTimerIndex);
            // timerQueue[currentTimerIndex].isRunning = true;
            onStart();
          }}
          label="Start Workout"
        />
      </Nav>
      {renderTimer()}
    </Container>
  );
}

export default TimersView;
