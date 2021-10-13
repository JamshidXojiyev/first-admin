import styled from "styled-components";

export const RadioBtn = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 100px;
  overflow: hidden;
  position: relative;
  background-color: ${({ bg }) => bg};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
  &::before {
    content: "${({ text }) => text}";
    position: absolute;
    background-color: ${({ color }) => color};
    left: ${({ left }) => left};
    width: 32px;
    height: 32px;
    border-radius: 100px;
    transition: all 0.3s ease-in-out;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 29px;
    color: #ffffff;
  }
`;
