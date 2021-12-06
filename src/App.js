import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";

const OuterContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const StyledNav = styled.nav`
  margin: 0px auto;
  text-align: left;
  font-size: .9rem;
`;

function App() {
  return (
    <OuterContainer>
      <Router>
        <StyledNav>
          <ul>
            <li>
              <Link to="/">Timers</Link>
            </li>
            <li>
              <Link to="/docs">Documentation</Link>
            </li>
          </ul>
        </StyledNav>
        <Switch>
          <Route path="/docs">
            <DocumentationView />
          </Route>
          <Route path="/">
            <TimersView />
          </Route>
        </Switch>
      </Router>
    </OuterContainer>
  );
}

export default App;
