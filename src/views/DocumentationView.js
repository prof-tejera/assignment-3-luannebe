import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";

import { StartButton } from "../components/generic/Button";
import { NumInput, TimerDisplay, Rounds, } from "../components/generic";
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
            component={ <StartButton visible={true} 
              label="Start" />}
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
            ]}
          />
          <DocumentComponent
            title="NumInput"
            component={<NumInput id="hours" name="hours" min="0" max="12" value="0" label="Hours" />}
            propDocs={[
              {
                prop: "id",
                description: "Id for the number input field (HTML input type number)",
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
                type: "string",                
                defaultValue: "0",
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
                prop: "hours",
                description: "Displays hours",
                type: "string",
                defaultValue: "00",
              },
              {
                prop: "minutes",
                description: "Displays minutes",
                type: "string",
                defaultValue: "00",
              },
              {
                prop: "seconds",
                description: "Displays seconds",
                type: "string",
                defaultValue: "00",
              },
            ]}
          />
       </div>
      </Container>
    );
  }
}

export default Documentation;
