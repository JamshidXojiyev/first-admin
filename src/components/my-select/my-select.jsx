import { MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { InputTitlr, MySelectContent } from "./my-select.s";

function MySelect({ onChange, ...res }) {
  const [pageLimit, setPageLimit] = useState("");

  useEffect(() => {
    onChange(pageLimit);
  }, [pageLimit]);

  return (
    <div>
      {res.input_title == "" ? "" : <InputTitlr>{res.input_title}</InputTitlr>}
      <MySelectContent
        text_align={res.text_align}
        variant="outlined"
        width={res.width}
        height={res.height}
        border={res.border}
        activ_border={res.activ_border}
        color={res.color}
        border_radius={res.border_radius}
        font_size={res.font_size}
        check={pageLimit == "" ? "rgba(100, 100, 100, 0.3)" : "#000"}
      >
        <Select
          value={pageLimit}
          displayEmpty
          onChange={(e) => setPageLimit(e.target.value)}
          renderValue={pageLimit !== "" ? undefined : () => res.InputLabel}
        >
          {res.datas.map((data, index) => (
            <MenuItem value={data} key={index}>
              {data}
            </MenuItem>
          ))}
        </Select>
      </MySelectContent>
    </div>
  );
}

export default MySelect;
