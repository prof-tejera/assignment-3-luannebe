import styled from "styled-components";
import { rem } from "polished";
import { theme } from "./theme";

//
// Containers
//

export const Container = styled.div`
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;
  margin: 0 auto;
  width: 600px;
`;

export const Nav = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin: 20px;
`;

export const TimerContainer = styled.div`
  width: ${rem("360px")};
  height: ${rem("480px")};
  border: 1px solid ${theme.neutralBackground};
  border-radius: 12px;
  background-color: ${theme.lightBackground};
  filter: ${theme.dropShadow};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  margin: 20px auto;
`;

export const Header = styled.div`
  width: 100%;
  height: auto;
  background-color: ${theme.primaryColor};
  margin: 0;
  border-radius: 12px 12px 0px 0px;
`;

export const AltHeader = styled(Header)`
  background-color: ${theme.accentColor};
`;

export const RunTimer = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  width: auto;
  height: auto;
`;

export const SetTimer = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  width: auto;
  height: auto;
  margin-bottom: 20px;
`;

export const FormContainer = styled.div`
  width: ${rem("360px")};
  height: ${rem("480px")};
  border: 1px solid ${theme.neutralBackground};
  border-radius: 12px;
  background-color: ${theme.lightBackground};
  filter: ${theme.dropShadow};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  margin: 20px auto;
`;

export const SelectContainer = styled.div`
  margin-bottom: 1rem;
`;

export const Celebrate = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  width: auto;
  height: auto;
  padding-top: 20px;
  padding-bottom: 20px
  overflow: hidden;
  position: relative;
`;

export const InputGroup = styled.div`
  margin: 0 6px 6px 3px;
  padding: 4px 3px;
  display: inline-block;
  width: auto;
  border: 1px solid ${theme.secondaryColor};
`;

export const Cycle = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 10px;
`;

export const ButtonGroup = styled.div`
  width: auto;
  padding: 0 10px 30px 10px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  background-color: transparent;
`;

export const InputDisplay = styled.div`
  width: auto;
  height: auto;
  margin: 0 auto;
  text-align: center;
`;
