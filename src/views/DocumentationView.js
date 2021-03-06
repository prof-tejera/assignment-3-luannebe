import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";

import { StartButton } from "../components/generic/Button";
import {
  NumInput,
  TimerDisplay,
  Rounds,
  ListItem,
  StaticListItem,
} from "../components/generic";
import { WorkPeriod } from "../components/generic/Period";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: left;
`;

const Title = styled.div`
  font-size: 2rem;
  text-align: left;
`;

class Documentation extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <Title>Documentation</Title>
          <DocumentComponent
            title="Button"
            component={<StartButton visible={true} label="Start" />}
            propDocs={[
              {
                prop: "visible",
                description: "Determines whether or not button is shown",
                type: "boolean",
                defaultValue: "",
              },
              {
                prop: "label",
                description: "Label on button",
                type: "string",
                defaultValue: "",
              },
              {
                prop: "onClick",
                description: "Timer control function",
                type: "func",
              },
              {
                prop: "primary",
                description: "Makes a wider button",
                type: "boolean",
              },
            ]}
          />
          <DocumentComponent
            title="NumInput"
            component={
              <NumInput
                id="hours"
                name="hours"
                min="0"
                max="12"
                value="0"
                label="Hours"
              />
            }
            propDocs={[
              {
                prop: "id",
                description:
                  "Id for the number input field (HTML input type number)",
                type: "string",
                defaultValue: "",
              },
              {
                prop: "name",
                description: "Name for the number input field",
                type: "string",
                defaultValue: "",
              },
              {
                prop: "min",
                description: "Minimum allowed number input value",
                type: "string",
                defaultValue: "",
              },
              {
                prop: "max",
                description: "Maximum allowed number input value",
                type: "string",
                defaultValue: "",
              },
              {
                prop: "value",
                description: "Number supplied by user",
                type: "number",
                defaultValue: "0 or 1",
              },
              {
                prop: "label",
                description: "Text to label the number input control",
                type: "string",
                defaultValue: "",
              },
            ]}
          />
          <DocumentComponent
            title="Period"
            component={<WorkPeriod currentPeriod>Work</WorkPeriod>}
            propDocs={[
              {
                prop: "currentPeriod",
                description: "Highlights current interval: work or rest",
                type: "boolean",
                defaultValue: "",
              },
            ]}
          />
          <DocumentComponent
            title="Rounds"
            component={<Rounds currentRound="1" totalRounds="4" />}
            propDocs={[
              {
                prop: "currentRound",
                description: "Number designating the current round",
                type: "string",
                defaultValue: "",
              },
              {
                prop: "totalRounds",
                description: "Total number of rounds in the workout",
                type: "string",
                defaultValue: "0",
              },
            ]}
          />
          <DocumentComponent
            title="TimerDisplay"
            component={<TimerDisplay hours="00" minutes="00" seconds="00" />}
            propDocs={[
              {
                prop: "currentTime",
                description: "Current time in seconds",
                type: "number",
                defaultValue: "0",
              },
            ]}
          />
          <DocumentComponent
            title="ListItem"
            component={<ListItem label="Countdown" />}
            propDocs={[
              {
                prop: "id",
                description: "Id of the timer",
                type: "number",
              },
              {
                prop: "label",
                description: "Type of timer",
                type: "string",
              },
              {
                prop: "onClick",
                description: "Function to delete timer",
                type: "func",
              },
            ]}
          />
          <DocumentComponent
            title="StaticListItem"
            component={<StaticListItem label="Countdown" isCurrent={true} />}
            propDocs={[
              {
                prop: "id",
                description: "Id of the timer",
                type: "number",
              },
              {
                prop: "label",
                description: "Type of timer",
                type: "string",
              },
              {
                prop: "current",
                description: "Indicated currently playing timer",
                type: "boolean",
              },
            ]}
          />
        </div>
      </Container>
    );
  }
}

export default Documentation;
