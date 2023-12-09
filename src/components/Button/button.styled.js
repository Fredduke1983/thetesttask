import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 16px;

  width: 100px;
  height: 34px;
  border: none;
  border-radius: 50px;
  background-color: #f4e041;
  &:hover {
    background-color: #ffe302;
  }
`;

export { Button };
