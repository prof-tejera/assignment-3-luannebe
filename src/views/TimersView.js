import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import { Container } from "../utils/containers";

function TimersView() {
  const { timerQueue } = useContext(AppContext);
  return (
    <Container>
      <h1>I am the "main page" for the Timers. &#10006;</h1>
      <ul>
        {timerQueue.map((timer) => (
          <li key={timer.id}>
            {timer.timerType}: {timer.totalLength}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default TimersView;
