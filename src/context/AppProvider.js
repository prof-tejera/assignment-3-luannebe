// AppProvider sets context and provides an "API" for the app
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import React, { useState, useEffect } from "react";
export const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const [totalWorkoutLength, setTotalWorkoutLength] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  // Just for testing
  const [timerQueue, setTimerQueue] = useState([
    {
      id: 1,
      timerType: "stopwatch",
      workLength: 6,
      restLength: 0,
      totalLength: 6,
      rounds: 1,
      isRunning: false,
      isCompleted: false,
      isCurrent: false,
    },
  ]);
  const [currentTimerIndex, setCurrentTimerIndex] = useState(0);
  const [numTimers, setNumTimers] = useState(timerQueue.length);

  const togglePause = (e) => {
    //currentTimer.isRunning ? setIsRunning(false) : setIsRunning(true);
  };

  // Timers
  useEffect(() => {
    let timerId;
    let currentTimer = timerQueue[currentTimerIndex];
    if (currentTimer.isRunning) {
      ///// STOPWATCH
      if (currentTimer.timerType === "stopwatch") {
        if (currentTime === 0) {
          setCurrentTime(1);
        }
        timerId = setInterval(() => {
          if (currentTime === currentTimer.workLength) {
            //setMode("celebrate");
            //advance or celebrate
            currentTimer.isRunning = false;
          }
          setCurrentTime(currentTime + 1);
        }, 1000);
        ///// COUNTDOWN
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
  }, [currentTimerIndex]);

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
        renderTimer: (timer) => {
          switch (timer.timerType) {
            case "stopwatch":
              setCurrentTime(0);
              timer.isRunning = true;
              return <Stopwatch />;
            case "countdown":
              console.log("worklength ", timer.workLength);
              setCurrentTime(timer.workLength);
              timer.isRunning = true;
              return <Countdown />;
            default:
              return <Stopwatch />;
          }
        },
        // runTimers: () => {
        //   let count = 0;
        //   while (count < timerQueue.length) {
        //     setCurrentTimer(timerQueue[count]);
        //     count++;
        //   }
        // },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
