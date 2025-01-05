import React, { useState } from 'react';
import './WaterIntakePage.css';

const WaterIntakePage = () => {
  const [waterIntake, setWaterIntake] = useState(0);
  const [goal, setGoal] = useState(2000); // Default daily water goal (in ml)

  const handleWaterIntakeChange = (event) => {
    setWaterIntake(Number(event.target.value));
  };

  const handleGoalChange = (event) => {
    setGoal(Number(event.target.value));
  };

  const calculateRemainingWater = () => {
    return goal - waterIntake;
  };

  const handleReset = () => {
    setWaterIntake(0);  // Reset water intake
    setGoal(2000);      // Reset goal to default
  };

  return (
    <div className="water-intake-page">
      <div className="sidebar">
        <h2>Water Tracker</h2>
        <nav>
          <ul>
            <li>
              <i className="icon">💧</i> Water Intake
            </li>
            <li>
              <i className="icon">🎯</i> Set Goal
            </li>
          </ul>
        </nav>
      </div>

      <div className="main-content">
        <div className="header">
          <h1>Track Your Water Intake</h1>
          <div className="profile">
            Set your daily water intake goal and track your progress.
          </div>
        </div>

        <div className="calculator">
          <div className="left-panel">
            <h3>Water Intake</h3>
            <div className="input-group">
              <label>Enter Water Intake (in ml):</label>
              <input
                type="number"
                value={waterIntake}
                onChange={handleWaterIntakeChange}
                placeholder="Enter water intake"
              />
            </div>
            <h4>Your Total Water Intake: {waterIntake} ml</h4>
          </div>

          <div className="right-panel">
            <h3>Set Your Goal</h3>
            <div className="input-group">
              <label>Enter Daily Water Goal (in ml):</label>
              <input
                type="number"
                value={goal}
                onChange={handleGoalChange}
                placeholder="Set daily goal"
              />
            </div>
            <div className="water-rate">
              <h4>Remaining: {calculateRemainingWater()} ml</h4>
            </div>

            <div className="gauge">
              {calculateRemainingWater() < 0 ? 'Goal Met!' : 'Keep Going!'}
            </div>
          </div>
        </div>

        <div className="daily-rate">
          <h3>Your Progress</h3>
          <ul>
            <li>Goal: {goal} ml</li>
            <li>Water Intake: {waterIntake} ml</li>
            <li>Remaining: {calculateRemainingWater()} ml</li>
          </ul>
        </div>

        <div className="calorie-result">
          <h2>Water Intake Tracker</h2>
          <div className="calorie-chart">
            {Math.round((waterIntake / goal) * 100)}%
          </div>
        </div>

        <button className="reset-btn" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default WaterIntakePage;
