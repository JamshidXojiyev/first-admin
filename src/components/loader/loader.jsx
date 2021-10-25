import React from "react";
import { WrapLoader } from "./loader.s";

function MyLoader(props) {
  return (
    <WrapLoader>
      <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <g class="dots">
          <circle class="mainDot" cx="300" cy="300" r="12.5" fill="#e8e4e3" />
          <g class="otherDots" fill="#e8e4e3">
            <circle cx="340" cy="300" r="12.5" />
            <circle cx="380" cy="300" r="12.5" />
            <circle cx="420" cy="300" r="12.5" />
            <circle cx="460" cy="300" r="12.5" />
            <circle cx="500" cy="300" r="12.5" />
          </g>
        </g>
      </svg>
      Resources1× 0.5× 0.25×Rerun
    </WrapLoader>
  );
}

export default MyLoader;
