import React from "react";
import "./buttonBookDemo.css";
import { useNavigate } from "react-router-dom";

const Button_bookDemo = ({ arrow = false, margin_right = false }) => {
  const className = ["btn__book_a_demo"];
  if (arrow) className.push("btn__arrow");
  if (margin_right) className.push("btn__arrow_margin_left");

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/book-demo";
    navigate(path);
  };

  return (
    <button className={className.join(" ")} onClick={routeChange}>
      Book a demo
    </button>
  );
};

export default Button_bookDemo;
