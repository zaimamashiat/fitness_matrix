import React, { useState } from 'react';
import '../components/WaterIntakeTracker.css';

const WaterIntakePage = () => {
  // State to hold the total water intake, current input, and the goal
  const [totalIntake, setTotalIntake] = useState(0);
  const [currentIntake, setCurrentIntake] = useState('');
  const [goal, setGoal] = useState('');
  const [isGoalSet, setIsGoalSet] = useState(false);

  // Function to handle adding the current intake to the total intake
  const handleAddWater = () => {
    if (currentIntake && !isNaN(currentIntake)) {
      setTotalIntake(totalIntake + parseFloat(currentIntake));
      setCurrentIntake(''); // Reset input after adding
    } else {
      alert('Please enter a valid number!');
    }
  };

  // Function to reset the total intake
  const handleReset = () => {
    setTotalIntake(0);
  };

  // Function to set the daily water intake goal
  const handleSetGoal = () => {
    if (goal && !isNaN(goal)) {
      setIsGoalSet(true);
    } else {
      alert('Please enter a valid goal!');
    }
  };

  return (
    <div className="water-intake-page">
      <div className="container">
        <h1>Water Intake Tracker</h1>

        {/* Set Goal Section */}
        {!isGoalSet && (
          <div className="goal-container">
            <label htmlFor="goal-input">Set your daily water intake goal (in liters):</label>
            <input
              type="number"
              id="goal-input"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="e.g., 2.5"
            />
            <button className="set-goal-btn" onClick={handleSetGoal}>
              Set Goal
            </button>
          </div>
        )}

        {/* Input for water intake */}
        {isGoalSet && (
          <div className="input-container">
            <label htmlFor="water-input">Enter water intake (in liters):</label>
            <input
              type="number"
              id="water-input"
              value={currentIntake}
              onChange={(e) => setCurrentIntake(e.target.value)}
              placeholder="e.g., 0.5"
            />
            <button className="add-btn" onClick={handleAddWater}>
              Add Water
            </button>
          </div>
        )}

        {/* Display total intake and goal progress */}
        {isGoalSet && (
          <div className="total-container">
            <h2>Total Water Intake: {totalIntake.toFixed(2)} L</h2>
            <div className="progress">
              <h3>Goal: {goal} L</h3>
              <progress value={totalIntake} max={goal}></progress>
              <p>{((totalIntake / goal) * 100).toFixed(2)}% of your goal achieved</p>
            </div>
          </div>
        )}

        <button className="reset-btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default WaterIntakePage;