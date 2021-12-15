import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme, fontWeight } from "../../utils";
import { rem } from "polished";

const Container = styled.div`
  text-align: center;
  display: inline-block;
  width: 5rem;
  margin: 0 0 6px;
`;

const Input = styled.input.attrs({ type: "number" })`
  width: 4.5rem;
  margin: 3px 0;
  border-width: 0;
  border-radius: 3px;
  background-color: ${theme.mediumBackground};
  font-size: ${rem("32px")};
  font-weight: ${fontWeight.regular};
  font-family: ${theme.displayFont};
  color: ${theme.darkTextColor};
  padding: 3px;
  text-align: center;
`;

const Label = styled.label`
  margin: 6px auto;
  border-width: 0;
  color: ${theme.mediumTextColor};
  font-size: 12px;
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
  text-align: center;
`;

export const NumInput = (props) => {
  const { id, name, min, max, label, onChange, value } = props;

  return (
    <Container>
      <Input
        type="number"
        id={id}
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
      <Label htmlFor={id}> {label} </Label>
    </Container>
  );
};

NumInput.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  name: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  value: PropTypes.number,
  label: PropTypes.string,
};
