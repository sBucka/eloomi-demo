import React from "react";
import "./sectionText.css";
/**
 * Takes 3 span elements and in order it styles them
 */
const Section_text = ({ children }) => {
  return (
    <div className="section">
      <span className="section-heading-one">{children[0].props.children}</span>
      <span className="section-heading-two">{children[1].props.children}</span>
      <span className="section-text">{children[2].props.children}</span>
    </div>
  );
};

export default Section_text;
