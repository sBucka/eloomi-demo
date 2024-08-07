import React from "react";
import "./divider.css";

const Divider = ({ children, style = true }) => {
  return (
    <div class="devider">
      <div class="devider-line"></div>
      <div className={style ? "devider-text" : " "}>{children}</div>
      <div class="devider-line"></div>
    </div>
  );
};

export default Divider;
