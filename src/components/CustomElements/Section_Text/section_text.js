import React from "react";
import "./section_text.css";
/**
 * Takes 3 span elements and in order it styles them
 */
const Section_text = ({ children }) => {
    console.log(children[0])
  return (
    <div className="section">
      <span class="section-heading-one" >{children[0]}</span>
      <span class="section-heading-two">
      {children[1]}
      </span>
      <span class="section-text">
      {children[2]}
      </span>
    </div>
  );
};

export default Section_text;
