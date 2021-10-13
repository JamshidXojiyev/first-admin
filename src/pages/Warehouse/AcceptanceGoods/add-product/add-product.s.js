import styled from "styled-components";

export const HeaderContent = styled.div`
  width: 100%;
  min-height: 105px;
  background: #f9f9f9;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: space-around;
  align-items: center;
  padding: 14px 0;
`;
export const FooterContent = styled.div`
  position: absolute;
  bottom: 8px;
  width: calc(100% - 64px);
`;
export const ProductSum = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 12px;
`;
export const Sum = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: right;
  color: #363740;
`;
export const FooterText = styled.h4`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #6f6f6f;
  padding-top: 12px;
  padding-bottom: 2px;
`;
