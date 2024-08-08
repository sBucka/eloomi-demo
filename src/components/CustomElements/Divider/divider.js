import React from "react";
import "./divider.css";

const Divider = ({ children, text = true }) => {
  return (
    <div class="devider">
      <div class="devider-line"></div>
      <div className={text ? "devider-text" : "divider_children"}>{children}</div>
      <div class="devider-line"></div>
    </div>
  );
};

export default Divider;
