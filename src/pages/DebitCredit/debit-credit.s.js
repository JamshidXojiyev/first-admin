import { Paper } from "@material-ui/core";
import styled from "styled-components";

export const MyTab = styled(Paper)`
  box-shadow: none !important;
  margin-bottom: 8px;
  & .PrivateTabIndicator-colorPrimary-2 {
    border-bottom: 2px solid #3982FF;
  }
  & button {
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #363740;
  }
  & .MuiTab-textColorPrimary.Mui-selected {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #3982ff;
  }
`;
export const ProductsInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: flex-end;
  align-items: flex-end;
  justify-content: center;
`;
export const ProductsSum = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #363740;
  margin-bottom: 16px;
  & span {
    margin-left: 32px;
    color: #3982ff;
  }
`;
