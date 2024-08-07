import React from "react";
import "./button_bookDemo.css";

const Button_bookDemo = ({ arrow = false, margin_left = false}) => {
  let className = ["btn__book_a_demo"];
  if(arrow) className.push("btn__arrow");
  if(margin_left) className.push("btn__arrow_margin_left")
  console.log(className)
  return <button className={className.join(" ")}>Book a demo</button>;
};

export default Button_bookDemo;
