import React, { useState } from 'react';

function Bmi() {
  const [height, setHeight] = useState(''); // Height in meters
  const [weight, setWeight] = useState(''); // Weight in kilograms
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBmi = (e) => {
    e.preventDefault();
    if (height && weight) {
      const bmiValue = (weight / (height * height)).toFixed(2);
      setBmi(bmiValue);

      // Determine BMI category
      if (bmiValue < 18.5) {
        setMessage('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setMessage('Normal weight');
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setMessage('Overweight');
      } else {
        setMessage('Obese');
      }
    } else {
      setMessage('Please enter valid height and weight values.');
    }
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-teal-500 sm:text-3xl">
            Calculate your BMI!
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            A BMI calculator helps assess whether an individual’s weight is healthy for their height, providing a quick indicator of potential health risks.
          </p>

          <form 
            onSubmit={calculateBmi} 
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                Height (in meters)
              </label>
              <input
                type="number"
                step="0.01"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter height in meters"
              />
            </div>

            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                Weight (in kilograms)
              </label>
              <input
                type="number"
                step="0.1"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter weight in kilograms"
              />
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-teal-500 px-5 py-3 text-sm font-medium text-white"
            >
              Calculate BMI
            </button>
          </form>

          {bmi && (
            <div className="mt-4 text-center">
              <p className="text-lg font-medium">Your BMI is: {bmi}</p>
              <p className="text-sm text-gray-500">Category: {message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bmi;
