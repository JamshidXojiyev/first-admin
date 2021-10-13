import styled from "styled-components";

export const SearchBlock = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  justify-items: stretch;
  flex-direction: row;
  flex-wrap: nowrap;
  & > div > div:first-child {
    padding-right: 12px;
  }
`;
