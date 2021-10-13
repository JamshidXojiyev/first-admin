import React from "react";
import { InLabel, InputBlock, InputLabel, InputStyle } from "./input.s";

function MyInput({ title, ...res }) {
  return (
    <InputBlock>
      <InLabel>{title == "" ? "" : title}</InLabel>
      <InputStyle
        padding_right={res.padding_right}
        type={res.type || "search"}
        text_align={res.text_align}
        multiline={res.multiline}
        rows={res.rows}
        width={res.width}
        height={res.height}
        error={res.error}
        label={res.label}
        color={res.color}
        activ={res.activ}
        border_color={res.border_color}
        border_radius={res.border_radius}
        font_size={res.font_size}
        variant="outlined"
        bg_color={res.bg_color}
        {...res}
      />
    </InputBlock>
  );
}

export default MyInput;
