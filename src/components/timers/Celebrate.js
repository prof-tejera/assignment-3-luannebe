import React, { useContext } from "react";
import { TimerContainer, Header, Celebrate } from "../../utils/containers";
import { Title, Message, Caption, Emoji } from "../../utils/headings";
import { AppContext } from "../../context/AppProvider";

const Celebrate = () => {
  const { isRunning } = useContext(AppContext);

  return (
    <TimerContainer>
      <Header>
        <Title>Celebrate</Title>
      </Header>
      <Celebrate>
        <Message>YAY!</Message>
        <Caption>Happy Dance.</Caption>
        <Emoji celebrating={mode === "celebrate"}>😀</Emoji>
      </Celebrate>
    </TimerContainer>
  );
};
export default Celebrate;
