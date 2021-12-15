// AppProvider sets context and provides an "API" for the app

import React, { useState } from "react";
export const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const [currentTimer, setCurrentTimer] = useState(null);
  const [workoutLength, setWorkoutLength] = useState(0);
  const [timerQueue, setTimerQueue] = useState([
    {
      id: 1,
      timerType: "stopwatch",
      workLength: 0,
      restLength: 0,
      totalLength: 0,
      rounds: 1,
      timerStatus: "notRunning",
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        currentTimer,
        setCurrentTimer,
        timerQueue,
        workoutLength,
        // remove a timer from the queue
        deleteTimer: ({ timerId }) => {
          const updatedQueue = timerQueue.filter(
            (timer) => timer.id !== timerId
          );
          setTimerQueue(updatedQueue);
        },
        //
        // create a Timer and add it to the queue of Timers, and update workoutLength
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
          // add a Timer to the Queue
          setTimerQueue([
            ...timerQueue,
            {
              id,
              timerType,
              workLength,
              restLength,
              totalLength,
              rounds,
              timerStatus: "notRunning",
            },
          ]);
        },
        sumTimers: () => {
          let sum = timerQueue.reduce((accumulator, timer) => {
            return accumulator + timer.workLength;
          }, 0);
          setWorkoutLength(sum);
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
