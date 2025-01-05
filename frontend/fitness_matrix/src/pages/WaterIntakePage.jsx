// src/pages/WaterIntakePage.jsx

import React, { useState, useEffect } from 'react';
import WaterIntakeForm from '../components/WaterIntakeForm';
import WaterIntakeCard from '../components/WaterIntakeCard';
import '../components/WaterIntakeTracker.css';

const WaterIntakePage = () => {
  const [waterIntake, setWaterIntake] = useState(0);
  const [goal, setGoal] = useState(3000); // Default goal (in ml)

  useEffect(() => {
    // Fetch the saved water intake data from local storage or API
    const savedIntake = localStorage.getItem('waterIntake');
    if (savedIntake) {
      setWaterIntake(parseInt(savedIntake));
    }
  }, []);

  const updateWaterIntake = (amount) => {
    setWaterIntake((prevIntake) => {
      const newIntake = prevIntake + amount;
      localStorage.setItem('waterIntake', newIntake);
      return newIntake;
    });
  };

  return (
    <div className="water-intake-page">
      <h1>Water Intake Tracker</h1>
      <WaterIntakeForm updateWaterIntake={updateWaterIntake} />
      <WaterIntakeCard waterIntake={waterIntake} goal={goal} />
    </div>
  );
};

export default WaterIntakePage;
