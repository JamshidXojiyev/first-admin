import { ReactComponent as LeftCategory } from "../../../assets/category-left.svg";
import styled from "styled-components";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";

export const CategoryContent = styled.div``;
export const HomeContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
`;
export const BodyContent = styled.div`
  margin-top: 18px;
`;
export const MyCategory = styled(Accordion)`
  background-color: #f9f9f9 !important;
  border-radius: 4px !important;
  box-shadow: none !important;
  margin: 8px 0;
  display: block;
  width: 100%;
  &.MuiAccordion-root.Mui-expanded {
    margin: 0 !important;
  }
  &.MuiAccordion-root::before {
    border: none !important;
    display: none !important;
  }
  & .MuiAccordionSummary-root {
    min-height: 38px !important;
    max-height: 38px !important;
  }
`;
export const CategoryName = styled(AccordionSummary)`
  & .MuiAccordionSummary-content {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #6f6f6f;
    padding-left: ${({ priority }) => priority * 20}px;
  }
  & .MuiAccordionSummary-expandIcon.Mui-expanded {
    transform: rotate(90deg);
  }
`;
export const Subcategory = styled(AccordionDetails)`
  margin-left: 25px;
  padding: 0 !important;
  display: block !important;
  & p {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #6f6f6f;
  }
`;
