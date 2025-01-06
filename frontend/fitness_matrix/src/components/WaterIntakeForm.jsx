// src/components/WaterIntakeForm.jsx

import React, { useState } from 'react';

const WaterIntakeForm = ({ updateWaterIntake }) => {
  const [amount, setAmount] = useState(0);

  const handleInputChange = (e) => {
    setAmount(Number(e.target.value));
  };

  const handleAddWater = () => {
    if (amount > 0) {
      updateWaterIntake(amount);
      setAmount(0); // Clear the input after submission
    }
  };

  return (
    <div className="water-intake-form">
      <input
        type="number"
        value={amount}
        onChange={handleInputChange}
        placeholder="Amount in ml"
      />
      <button onClick={handleAddWater}>Add Intake</button>
    </div>
  );
};

export default WaterIntakeForm;
