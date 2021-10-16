import { Pagination } from "@material-ui/lab";
import React from "react";
import {
  FootContent,
  FootLeft,
  FootRight,
  MySelectTitle,
  TabBody,
  TabHead,
  TableContent,
  TD,
  TH,
  TR,
} from "./universal-table.s";
import { useState } from "react";
import MySelect from "../my-select/my-select";

function UniversalTable({ head, body, dataOrder, onLimitChange, future=true }) {

  const [page, setPage] = useState(1);
  return (
    <>
      <TableContent cellSpacing="0" cellPadding="10">
        <TabHead>
          <TR>
            {head.map((data, index) => (
              <TH key={index}>{data}</TH>
            ))}
          </TR>
        </TabHead>
        <TabBody>
          <TR>
            <TD colSpan={8}></TD>
          </TR>
          {body.map((data, index) => (
            <TR key={index}>
              {dataOrder.map((order, index) => (
                <TD key={index}>
                  {typeof order === "string" ? data[order] : order(data)}
                </TD>
              ))}
            </TR>
          ))}
          <TR>
            <TD colSpan={8}></TD>
          </TR>
        </TabBody>
      </TableContent>
      {!future ? (
        ""
      ) : (
        <FootContent>
          <FootLeft>
            <MySelectTitle>Показать на странице</MySelectTitle>
            <MySelect
              input_title=""
              width="80px"
              height="36px"
              border="1px solid #4B5B7A"
              activ_border="1px solid #3F4558"
              border_radius="4px"
              color="#A4A6B3"
              InputLabel="5"
              onChange={(limit) => console.log(limit)}
              datas={[5, 10, 20, 30, 50]}
            />
          </FootLeft>
          <FootRight>
            <Pagination
              count={10}
              page={page}
              onChange={(e, value) => setPage(value)}
              variant="outlined"
              shape="rounded"
            />
          </FootRight>
        </FootContent>
      )}
    </>
  );
}

export default UniversalTable;
