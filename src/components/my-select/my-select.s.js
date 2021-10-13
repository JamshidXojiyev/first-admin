import { FormControl } from "@material-ui/core";
import styled from "styled-components";

export const MySelectContent = styled(FormControl)`
  overflow: hidden;
  background-color: #fff;
  text-align: ${({ text_align }) => text_align};
  & > div > div {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: ${({ font_size }) => font_size};
    color: ${({ check }) => check};
  }
  width: ${({ width }) => width};
  & > div {
    height: ${({ height }) => height};
  }
  & fieldset {
    border-radius: ${({ border_radius }) => border_radius};
  }
  & .MuiOutlinedInput-notchedOutline {
    border: ${({ border }) => border};
  }
  & .MuiOutlinedInput-input {
    padding: 12px 16px;
  }
  & .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline {
    border: ${({ border }) => border};
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: ${({ activ_border }) => activ_border};
  }
`;
export const InputTitlr = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  color: #646464;
  margin-bottom: 8px !important;
`;
