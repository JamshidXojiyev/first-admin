import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const InputStyle = styled(TextField)`
  background-color: #fff;
  & input {
    text-align: ${({ text_align }) => text_align};
    padding-right: ${({ padding_right }) => padding_right};
    color: ${({ color }) => color};
    &:focus {
      color: ${({ activ }) => activ};
    }
  }
  & > div {
    background-color: ${({ bg_color }) => bg_color};
  }
  && {
    width: ${({ width }) => width};
  }
  && > div {
    height: ${({ height }) => height};
    font-size: ${({ font_size }) => font_size};
  }
  && fieldset {
    border-radius: 8px;
    border-color: rgba(0, 0, 0, 0.3);
  }
  && .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-width: 1px !important;
  }

  && .Mui-focused > fieldset {
    border-color: ${({ activ }) => activ} !important;
  }
  & fieldset {
    border-radius: ${({ border_radius }) => border_radius} !important;
  }
`;
export const InLabel = styled.h1`
  margin-bottom: 8px !important;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  color: #646464;
`;
export const InputBlock = styled.div`
  display: inline-block;
`;
