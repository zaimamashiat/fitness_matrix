import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularChart = ({ value, max }) => {
  const percentage = (value / max) * 100;

  return (
    <div style={{ width: 150, height: 150, margin: "auto" }}>
      <CircularProgressbar
        value={percentage}
        text={`${value} Kcal`}
        styles={buildStyles({
          textSize: "16px",
          pathColor: "#e67e22",
          textColor: "#333",
          trailColor: "#ddd",
        })}
      />
    </div>
  );
};

export default CircularChart;
