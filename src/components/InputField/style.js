import styled from "styled-components";

export const Input = styled.input`
  border: 3px solid #fff;
  height: 60px;
  padding: 0px 15px;
  transition: 0.3s;
  color: #fff;
  width: 100%;
  background: #fff;
  font-size: 25px;

  &:focus {
    border: 3px solid #673ab7;
  }
  &:focus ~ label {
    top: 0;
    font-size: 20px;
    color: #673ab7;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 15px;
  color: #333;
  transition: 0.3s;
  background: #fff;
  padding: 0px 5px;
  font-size: 20px;
`;

export const Fieldset = styled.fieldset`
  position: relative;
  width: 100%;
  margin: 10px 0;

  &[aria-disabled="false"] label {
    top: 0;
    font-size: 20px;
    color: #4e8c07;
  }
  &[aria-disabled="false"] input {
    border: 3px solid #4e8c07;
  }
`;
