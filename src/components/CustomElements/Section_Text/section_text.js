import React from "react";
import "./section_text.css";
/**
 * Takes 3 span elements and in order it styles them
 */
const Section_text = ({ children }) => {
  return (
    <div className="section">
      <span class="section-heading-one" >{children[0].props.children}</span>
      <span class="section-heading-two">
      {children[1].props.children}
      </span>
      <span class="section-text">
      {children[2].props.children}
      </span>
    </div>
  );
};

export default Section_text;
