// AppProvider sets context and provides an "API" for the app
import React, { useState, useEffect } from "react";
export const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const [totalWorkoutLength, setTotalWorkoutLength] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [rounds, setRounds] = useState(0);
  const [workLength, setWorkLength] = useState(0);
  const [restLength, setRestLength] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isRestPeriod, setIsRestPeriod] = useState(false);
  const [currentTimerIndex, setCurrentTimerIndex] = useState(0);
  const [timeToCelebrate, setTimeToCelebrate] = useState(false);
  const [timerQueue, setTimerQueue] = useState([]);

  const onPause = (e) => {
    setIsRunning(!isRunning);
  };

  // helper function to set up state for current timer according to timer type
  // i am sure there is a better way to do this .. but what?

  const configureSettings = (i) => {
    switch (timerQueue[i].timerType) {
      case "stopwatch":
        setCurrentTime(1);
        break;
      case "countdown":
        let cTime = timerQueue[i].workLength;
        setCurrentTime(cTime);
        break;
      case "xy":
        let xTime = timerQueue[i].workLength;
        setCurrentTime(xTime);
        let xRounds = timerQueue[i].rounds;
        setRounds(xRounds);
        let xWorkLength = timerQueue[i].workLength;
        setWorkLength(xWorkLength);
        setCurrentRound(1);
        break;
      case "tabata":
        let tWorkLength = timerQueue[i].workLength;
        setWorkLength(tWorkLength);
        let tRestLength = timerQueue[i].restLength;
        setRestLength(tRestLength);
        setCurrentTime(tWorkLength + tWorkLength);
        setCurrentRound(1);
        let tRounds = timerQueue[i].rounds;
        setRounds(tRounds);
        setIsRestPeriod(false);
        break;
    }
  };

  const onStart = () => {
    // set the current timer index to the first item in the queue
    setCurrentTimerIndex(0);
    //  set up the state for the various timer types
    configureSettings(0);
    // set the timer to running
    setIsRunning(true);
  };

  const goToNextTimer = () => {
    if (currentTimerIndex < timerQueue.length - 1) {
      setCurrentTimerIndex(currentTimerIndex + 1);
      configureSettings(currentTimerIndex + 1);
    } else {
      setIsRunning(false);
      setTimeToCelebrate(true);
    }
  };

  // Timers
  useEffect(() => {
    // keeps track of interval id
    let timerId;

    // pull the current timer from the timer queue using the index
    let currentTimer = timerQueue[currentTimerIndex];

    if (isRunning && currentTimer) {
      ///// STOPWATCH
      if (currentTimer.timerType === "stopwatch") {
        timerId = setInterval(() => {
          if (currentTime === currentTimer.workLength) {
            goToNextTimer();
          } else {
            setCurrentTime(currentTime + 1);
          }
        }, 1000);
        ///// XY
      } else if (currentTimer.timerType === "xy") {
        timerId = setInterval(() => {
          if (currentRound === currentTimer.rounds && currentTime === 1) {
            goToNextTimer();
          } else {
            if (currentTime > 1) {
              setCurrentTime(currentTime - 1);
            } else {
              setCurrentRound(currentRound + 1);
              setCurrentTime(workLength);
            }
          }
        }, 1000);
        ///// TABATA
      } else if (currentTimer.timerType === "tabata") {
        timerId = setInterval(() => {
          if (currentRound === currentTimer.rounds && currentTime === 1) {
            goToNextTimer();
          } else {
            if (currentTime > 1) {
              if (currentTime > restLength + 1) {
                setIsRestPeriod(false);
              } else {
                setIsRestPeriod(true);
              }
              setCurrentTime(currentTime - 1);
            } else {
              setCurrentRound(currentRound + 1);
              setCurrentTime(workLength + restLength);
              setIsRestPeriod(false);
            }
          }
        }, 1000);
        ///// COUNTDOWN
      } else {
        timerId = setInterval(() => {
          if (currentTime === 1) {
            goToNextTimer();
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
  }, [
    currentTimerIndex,
    isRunning,
    currentTime,
    timerQueue,
    currentRound,
    goToNextTimer,
    restLength,
    workLength,
    timeToCelebrate,
  ]);

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
        onStart,
        onPause,
        getCurrentTimer: () => timerQueue[currentTimerIndex],
        isRunning,
        isRestPeriod,
        currentRound,
        setCurrentRound,
        rounds,
        setRounds,
        workLength,
        setWorkLength,
        // remove a timer from the queue
        deleteTimer: (id) => {
          const updatedQueue = timerQueue.filter((timer) => timer.id != id);
          setTimerQueue(updatedQueue);
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
          // not all timer types have all times; setting missing times to 0
          const verifiedRestSeconds = restSeconds ? restSeconds : 0;
          const verifiedRestMinutes = restMinutes ? restMinutes : 0;
          const verifiedRounds = rounds ? rounds : 0;

          const workLength = seconds + minutes * 60 + hours * 3600;
          const restLength = verifiedRestSeconds + verifiedRestMinutes * 60;
          const totalLength = (workLength + restLength) * verifiedRounds;
          const newQueue = [
            ...timerQueue,
            {
              id,
              timerType,
              workLength,
              restLength,
              totalLength,
              rounds,
            },
          ];
          // add the new Timer to the Queue
          setTimerQueue(newQueue);
          // get total time for all configured timers
          let sum = newQueue.reduce((accumulator, timer) => {
            return accumulator + timer.totalLength;
          }, 0);
          setTotalWorkoutLength(sum);
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
