import { Button, ButtonBase } from "@material-ui/core";
import styled from "styled-components";

// export const BtnCon = styled(Button)`
//   && {
//     background: ${({ bg }) => `${bg}e9`};
//     color: ${({ color }) => color};
//     font-family: "Inter", sans-serif;
//     font-style: normal;
//     font-weight: normal;
//     font-size: ${({ font_size }) => font_size};
//     line-height: 17px;
//     min-width: ${({ width }) => width};
//     height: ${({ height }) => height};
//     & > span:first-child {
//       gap: 6px;
//     }
//   }
//   &&:hover {
//     background: ${({ bg }) => bg};
//     color: ${({ color }) => color};
//     box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
//       0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
//   }
// `;

export const BtnCon = styled(ButtonBase)`
  && {
    background: ${({ bg }) => bg};
    color: ${({ color }) => color};
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: ${({ font_size }) => font_size};
    line-height: 17px;
    min-width: ${({ width }) => width};
    height: ${({ height }) => height};
    border-radius: ${({ border_radius }) => border_radius};
    padding: ${({ padding }) => padding};
    gap: 6px;
    transition: all .3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &&:hover {
    background: ${({ bg }) => `${bg}e9`};
  }
`;
