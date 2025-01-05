// src/components/WaterIntakeCard.jsx

import React from 'react';

const WaterIntakeCard = ({ waterIntake, goal }) => {
  const percentage = Math.min((waterIntake / goal) * 100, 100); // Calculate the percentage of goal achieved

  return (
    <div className="water-intake-card">
      <div className="intake-status">
        <h3>Current Intake</h3>
        <div className="intake-amount">
          <span>{waterIntake} ml</span>
        </div>
        <div className="intake-progress-bar">
          <div className="progress" style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
      <div className="goal-status">
        <h4>Goal: {goal} ml</h4>
        <div className="remaining">
          <span>{goal - waterIntake} ml remaining</span>
        </div>
      </div>
    </div>
  );
};

export default WaterIntakeCard;
