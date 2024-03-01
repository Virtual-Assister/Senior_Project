import React from "react";

// Renamed Button to CustomButton to avoid conflicts
export const CustomButton = ({ classes, text, icon, handleEvent }) => {
  return (
    <button className={`btn ${classes}`} onClick={handleEvent}>
      {icon}
      {text}
    </button>
  );
};
