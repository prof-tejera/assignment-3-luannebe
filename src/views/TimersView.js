import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppProvider";
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Celebrate from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import {
  GridContainer,
  StatsContainer,
  ControllerContainer,
  TimerList,
} from "../utils/containers";
import { StartButton } from "../components/generic/Button";
import { StaticListItem } from "../components/generic/StaticListItem";

function TimersView() {
  const { timerQueue, totalWorkoutLength, onStart, getCurrentTimer } =
    useContext(AppContext);

  const navigate = useNavigate();

  const renderTimer = () => {
    const currentTimer = getCurrentTimer();
    if (!currentTimer) return null;

    switch (currentTimer.timerType) {
      case "stopwatch":
        return <Stopwatch />;
      // break;
      case "countdown":
        return <Countdown />;
      // break;
      case "xy":
        return <XY />;
      // break;
      case "tabata":
        return <Tabata />;
      //   break;
      default:
        return <Celebrate />;
    }
  };

  return (
    <GridContainer>
      <TimerList>
        {timerQueue.length > 0 &&
          timerQueue.map((timer) => (
            <StaticListItem
              key={timer.id}
              id={timer.id}
              label={timer.timerType}
            />
          ))}
      </TimerList>
      {renderTimer()}
      <StatsContainer>
        <p>Total workout time (seconds): {totalWorkoutLength} </p>
      </StatsContainer>
      <ControllerContainer>
        <StartButton
          visible
          primary
          onClick={() => {
            onStart();
          }}
          label="Start Workout"
        />
        <StartButton
          visible
          primary
          onClick={() => {
            navigate("/add");
          }}
          label="Configure Timers"
        />
      </ControllerContainer>
    </GridContainer>
  );
}

export default TimersView;
