import React, { useContext } from "react";
import {
  TimerContainer,
  Header,
  CelebrateContainer,
} from "../../utils/containers";
import { Title, Message, Caption, Emoji } from "../../utils/headings";
import { AppContext } from "../../context/AppProvider";

const Celebrate = () => {
  const { isRunning } = useContext(AppContext);

  return (
    <TimerContainer>
      <Header>
        <Title>Celebrate</Title>
      </Header>
      <CelebrateContainer>
        <Message>YAY!</Message>
        <Caption>Happy Dance.</Caption>
        <Emoji celebrating>😀</Emoji>
      </CelebrateContainer>
    </TimerContainer>
  );
};
export default Celebrate;
