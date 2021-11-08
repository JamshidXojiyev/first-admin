import { Dialog } from "@material-ui/core";
import styled from "styled-components";

export const Model = styled(Dialog)`
  /* overflow-y: overlay; */
  top: 64px !important;
  /* left: 260px !important; */
  z-index: 0 !important;
`;
export const ModalTitle = styled.div`
  padding: 12px 24px !important;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #646464;
`;
export const TitleBlock = styled.div`
  border-bottom: 2px solid #68768f;
  min-width: 470px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 18px;
`;
export const ModalBody = styled.div`
  margin: 0 24px;
  padding: 22px 0;
  max-width: 510px;
  min-width: 510px;
`;
