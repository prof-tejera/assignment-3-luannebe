// AppProvider sets context and provides an "API" for the app
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import React, { useState, useEffect } from "react";
export const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const [totalWorkoutLength, setTotalWorkoutLength] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentTimerIndex, setCurrentTimerIndex] = useState(null);

  // Just for testing
  const [timerQueue, setTimerQueue] = useState([
    {
      id: 1,
      timerType: "stopwatch",
      workLength: 6,
    },
    {
      id: 2,
      timerType: "stopwatch",
      workLength: 10,
    },
  ]);

  const onPause = (e) => {
    setIsRunning(!isRunning);
  };

  const onStart = () => {
    // set the current timer index to the first item in the queue
    setCurrentTimerIndex(0);
    // set the running time to 0
    setCurrentTime(0);
    // set the timer to running
    setIsRunning(true);
  };

  const goToNextTimer = () => {
    setCurrentTimerIndex(currentTimerIndex + 1);
    setCurrentTime(0);
  };

  // Timers
  useEffect(() => {
    // keeps track of interval id
    let timerId;

    // pull the current time from the timer queue using the index
    let currentTimer = timerQueue[currentTimerIndex];

    // TODO we should be checking if we have finished the workout, so that we can prompt user
    if (isRunning && currentTimer) {
      ///// STOPWATCH
      if (currentTimer.timerType === "stopwatch") {
        timerId = setInterval(() => {
          // if we have reached
          if (currentTime === currentTimer.workLength) {
            goToNextTimer();
          } else {
            setCurrentTime(currentTime + 1);
          }
        }, 1000);
        ///// TODO Implement similar to stopwatch COUNTDOWN
      } else {
        timerId = setInterval(() => {
          if (currentTime === 1) {
            // setMode("celebrate");
            // tink.play();
            // somehow advance or celebrate
            currentTimer.isRunning = false;
          }
          setCurrentTime(currentTime - 1);
        }, 1000);
      }
    }
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [currentTimerIndex, isRunning, currentTime, timerQueue]);

  return (
    <AppContext.Provider
      value={{
        currentTimerIndex,
        setCurrentTimerIndex,
        currentTime,
        setCurrentTime,
        timerQueue,
        totalWorkoutLength,
        setTotalWorkoutLength,
        // remove a timer from the queue
        deleteTimer: (id) => {
          const updatedQueue = timerQueue.filter((timer) => timer.id != id);
          setTimerQueue(updatedQueue);
          // get total time for all configured timers
          let sum = updatedQueue.reduce((accumulator, timer) => {
            return accumulator + timer.totalLength;
          }, 0);
          setTotalWorkoutLength(sum);
        },
        //
        // create a Timer and add it to the queue of Timers
        createTimer: ({
          // values coming in from AddTimer
          timerType,
          seconds,
          minutes,
          hours,
          restSeconds,
          restMinutes,
          rounds,
        }) => {
          // computed values
          const id = timerQueue.length + 1;
          const workLength = seconds + minutes * 60 + hours * 3600;
          const restLength = restSeconds + restMinutes * 60;
          const totalLength = (workLength + restLength) * rounds;
          const newQueue = [
            ...timerQueue,
            {
              id,
              timerType,
              workLength,
              restLength,
              totalLength,
              rounds,
              isCurrent: false,
              isRunning: false,
              isCompleted: false,
            },
          ];
          // add a Timer to the Queue
          setTimerQueue(newQueue);
          // get total time for all configured timers
          let sum = newQueue.reduce((accumulator, timer) => {
            return accumulator + timer.totalLength;
          }, 0);
          setTotalWorkoutLength(sum);
        },
        onStart,
        onPause,
        getCurrentTimer: () => timerQueue[currentTimerIndex],
        isRunning,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
