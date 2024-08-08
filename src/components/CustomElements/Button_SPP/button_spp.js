import React from "react";
import "./button_spp.css";

const Button_spp = ({ gray = false }) => {
  const className = ["btn__spp"];
  gray ? className.push("btn__spp_grey") : className.push("btn__spp_blue");
  return <button className={className.join(" ")}>See pricing plans</button>;
};

export default Button_spp;
