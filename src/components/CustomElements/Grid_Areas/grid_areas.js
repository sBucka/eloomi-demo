import React from "react";
import "./grid_areas.css";
import smileSvg from "./../../../assets/smile.svg";

const Grid_areas = ({ children }) => {
  if (typeof children === "string")
    return (
      <div className="grid_areas">
        <img src={smileSvg} alt="" className="grid_areas__area_img" />
        <div class="grid_areas__area_text">{children}</div>
      </div>
    );
  const context = Array.isArray(children) ? (
    children.map((child) => (
      <div className="grid_areas__area">
        <img src={smileSvg} alt="" className="grid_areas__area_img" />
        <div class="grid_areas__area_text">{child.props.children}</div>
      </div>
    ))
  ) : (
    <div className="grid_areas__area">
      <img src={smileSvg} alt="" className="grid_areas__area_img" />
      <div class="grid_areas__area_text">{children.props.children}</div>
    </div>
  );
  return <div className="grid_areas">{context}</div>;
};

export default Grid_areas;
