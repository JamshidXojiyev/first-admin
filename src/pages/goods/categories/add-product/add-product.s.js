import styled from "styled-components";

export const AddFileName = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #646464;
  padding-top: 28px;
`;
export const AddFile = styled.div`
  min-width: 510px;
  padding: 32px 90px;
  border: 1.4px dashed #cdd6e0;
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
  cursor: pointer;
`;
export const FileText = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #646464;
  margin-left: 64px;
  text-align: center;
  & h3:first-child {
    padding-bottom: 8px;
  }
  & h3 > span {
    color: rgb(255, 105, 165);
  }
`;
export const MyBtn = styled.div`
  width: 510px;
  display: flex;
  justify-content: center;
  margin-top: 28px;
`;
