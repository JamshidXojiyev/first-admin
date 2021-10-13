import React from "react";
import { BtnCon } from "./button.s";

function MyButton({ click, ...res }) {
  return (
    <BtnCon
      bg={res.bg}
      color={res.color}
      width={res.width}
      height={res.height}
      font_size={res.font_size}
      onClick={click}
      border_radius={res.border_radius}
      padding={res.padding}
      {...res}
    >
      {res.icon} {res.text}
    </BtnCon>
  );
}

export default MyButton;
