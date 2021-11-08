import ChipInput from "material-ui-chip-input";
import styled from "styled-components";

export const AddContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ margin_bottom }) => margin_bottom || "18px"};
  padding: ${({ padding }) => padding};
`;
export const Name = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #646464;
  border-top: 2px solid #68768f;
  border-bottom: 2px solid #68768f;
  padding: 12px 0;
  margin: 18px 0;
`;
export const ProductText = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #646464;
  margin: 6px 0;
`;
export const GoodsStores = styled.div`
  padding: 6px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  & > div {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    gap: 7px;
  }
`;
export const LabelPrices = styled.div`
  width: 255px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  color: #646464;
`;
export const LabelName = styled.div`
  width: 255px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #646464;
`;
export const MyChipInput = styled(ChipInput)`
  width: 100%;
  &.WAMuiChipInput-underline-18:after {
    border-bottom: 2px solid #a4a6b3;
  }
  &.MuiFormLabel-root.Mui-focused {
    color: #a4a6b3;
  }
`;
export const CheckboxBlock = styled.div`
  width: 250px;
  & label {
    width: 100%;
    & svg {
      color: #3982ff;
      width: 20px;
      height: 20px;
    }
    & span:last-child {
      font-family: Inter;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 12px;
      color: #646464;
    }
  }
`;
