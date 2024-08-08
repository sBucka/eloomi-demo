import React from "react";
import "./button_bookDemo.css";

const Button_bookDemo = ({ arrow = false, margin_right = false }) => {
  let className = ["btn__book_a_demo"];
  if (arrow) className.push("btn__arrow");
  if (margin_right) className.push("btn__arrow_margin_left");
  return <button className={className.join(" ")}>Book a demo</button>;
};

export default Button_bookDemo;
