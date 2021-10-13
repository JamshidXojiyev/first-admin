import React, { useState } from "react";
import { RadioBtn } from "./radio-button.s";

function RadioButton({ ...res }) {
  const [content, setContent] = useState(true);
  return (
    <RadioBtn
      width={res.width}
      height={res.height}
      bg={content ? res.onBg : res.offBg}
      color={content ? res.onColor : res.offColor}
      left={content ? "40px" : "4px"}
      text={content ? "ON" : "OFF"}
      onClick={() => (content ? setContent(false) : setContent(true))}
    ></RadioBtn>
  );
}

export default RadioButton;
