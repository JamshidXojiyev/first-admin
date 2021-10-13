import { FormControl } from "@material-ui/core";
import styled from "styled-components";

export const TableContent = styled.table`
  width: 100%;
  border: 0;
  /* & td:first-child {
    padding-left: 12px;
  }
  & td:last-child {
    padding-right: 12px;
  } */
`;
export const TabHead = styled.thead``;
export const TabBody = styled.tbody`
  & > tr {
    margin-top: 32px;
    & > td:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    & > td:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    &:nth-child(even) {
      background-color: #f9f9f9;
    }
  }
  & tr:last-child > td {
    background-color: #fff;
  }
`;
export const TR = styled.tr`
  /* & td:last-child {
    text-align: right;
  } */
`;
export const TH = styled.th`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #363740;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 28px;
  padding-top: 30px;
`;
export const TD = styled.td`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #6f6f6f;
  padding: 12px 0;
  text-align: center;
`;
export const FootContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  padding: 12px 0;
`;

export const MySelectTitle = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #b0b7cb;
  display: initial;
  margin-right: 12px;
`;
export const FootLeft = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
`;
export const FootRight = styled.div``;
