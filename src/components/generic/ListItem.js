import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme, fontWeight, typeScale } from "../../utils";
import { rem } from "polished";

const StyledListItem = styled.div`
  height: ${rem("40px")};
  line-height: ${rem("40px")};
  width: ${rem("150px")};
  margin: 0.5rem auto;
  border-width: 3px;
  border-radius: 0;
  border-color: ${theme.primaryColor};
  color: ${theme.primaryColor};
  font-family: ${theme.primaryFont};
  font-size: ${typeScale.small};
  font-weight: ${fontWeight.light};
  background-color: ${theme.lightBackground};
  text-transform: none;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: ${theme.mediumBackground};
    text-decoration: line-through;
  }
`;

export const ListItem = (props) => {
  const { onClick, label, id } = props;

  return (
    <StyledListItem id={id} onClick={onClick}>
      {label}
    </StyledListItem>
  );
};

ListItem.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.number,
};

//export default ListItem;
