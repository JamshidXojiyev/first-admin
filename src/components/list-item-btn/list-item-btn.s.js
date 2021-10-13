import { Collapse, ListItem, ListItemText } from "@material-ui/core";
import styled from "styled-components";

export const ItemBlock = styled(ListItem)`
  display: flex;
  width: 100%;
  padding: 8px 24px;
  padding-right: 0;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  transition: all .5s ease-in-out;
  &.nav-active {
    border-left: 3px solid #dde2ff;
    background-color: rgba(0, 0, 0, 0.04);
  }
`;
export const MenuIcon = styled.img`
  width: 16px;
  height: 16px;
`;
export const MenuName = styled(ListItemText)`
  white-space: nowrap;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #a4a6b3;
  transition: all 0.5s ease-in-out;
  &.activ {
    font-weight: 500;
    color: #dde2ff;
  }
`;
export const IsOpenBlock = styled(Collapse)`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #dde2ff;
  & .subItems {
    margin-left: 56px !important;
  }
`;
