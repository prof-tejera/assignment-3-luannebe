import React from "react";
import {
  CelebrateContainer,
  Header,
  CelebrateMessage,
} from "../../utils/containers";
import { Title, Message, Caption, Emoji } from "../../utils/headings";

const Celebrate = () => {
  return (
    <CelebrateContainer>
      <Header>
        <Title>You Did It!!</Title>
      </Header>
      <CelebrateMessage>
        <Message>YAY!</Message>
        <Caption>Happy Dance.</Caption>
        <Emoji celebrating>😀</Emoji>
      </CelebrateMessage>
    </CelebrateContainer>
  );
};
export default Celebrate;
