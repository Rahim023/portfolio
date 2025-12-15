import React from "react";
import "./ElectricBorder.css";

const ElectricBorder = ({ children, style }) => {
  return (
    <div className="electric-border" style={style}>
      {children}
    </div>
  );
};

export default ElectricBorder;
