import { AppBar, Drawer, IconButton } from "@material-ui/core";
import styled from "styled-components";

export const HomeContent = styled.div`
  width: 100%;
  height: 100vh;
`;

// navigationbar
export const Navigationbar = styled(Drawer)`
  & > div {
    position: fixed;
    top: 64px;
    left: 0px;
    width: ${({ width }) => width};
    height: calc(100vh - 64px);
    background-color: #464750;
    transition: all 0.5s ease-in-out;
    overflow-y: overlay;
    overflow-x: hidden;
  }
`;

// sidebar
export const Siderbar = styled(AppBar)`
  position: absolute;
  top: 0;
  left: 270px;
  width: calc(100% - 270px);
  height: 64px;
  background-color: #363740 !important;
  & > div {
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
  }
`;
export const SidebarLeftContent = styled.div`
  display: flex;
  align-items: center;
`;
export const SidebarRightContent = styled.div`
  display: flex;
  align-items: center;
`;
export const Hamburger = styled(IconButton)`
  margin-left: 5px !important;
  margin-right: 30px !important;
  & rect {
    transition: all 0.5s ease-in-out;
  }
`;

// body
export const Body = styled.div`
  position: absolute;
  top: 64px;
  bottom: 0;
  right: 0;
  width: calc(100% - ${({ width }) => width});
  min-height: calc(100vh - 64px);
  transition: all 0.5s ease-in-out;
  padding: 20px 30px;
  background-color: #fff;
  overflow-y: overlay;
`;
