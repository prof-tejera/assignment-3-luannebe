import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DocumentationView from "./DocumentationView";
import TimersView from "./TimersView";
import AddTimer from "./AddTimer";
import AppProvider from "../context/AppProvider";
import styled from "styled-components";

const OuterContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const StyledNav = styled.nav`
  margin: 0px auto;
  text-align: left;
  font-size: 0.9rem;
`;

const routes = {
  HOME: "/",
  DOCS: "/docs",
  ADD: "/add",
};

const Wrapped = () => {
  return (
    <OuterContainer>
      <Router>
        <AppProvider>
          <StyledNav>
            <ul>
              <li>
                <Link to={routes.HOME}>Timers</Link>
              </li>
              <li>
                <Link to={routes.DOCS}>Documentation</Link>
              </li>
            </ul>
          </StyledNav>
          <Routes>
            <Route path={routes.DOCS} element={<DocumentationView />} />
            <Route path={routes.ADD} element={<AddTimer />} />
            <Route path={routes.HOME} element={<TimersView />} />
          </Routes>
        </AppProvider>
      </Router>
    </OuterContainer>
  );
};

export default Wrapped;
