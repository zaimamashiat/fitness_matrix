import React, { useState } from 'react';

function CalorieCalculator() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState(''); // Weight in kilograms
  const [height, setHeight] = useState(''); // Height in centimeters
  const [activityLevel, setActivityLevel] = useState('');
  const [calories, setCalories] = useState(null);

  const calculateCalories = (e) => {
    e.preventDefault();
    if (age && gender && weight && height && activityLevel) {
      let bmr;
      if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }

      const activityMultiplier = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        veryActive: 1.9,
      }[activityLevel];

      const totalCalories = (bmr * activityMultiplier).toFixed(2);
      setCalories(totalCalories);
    } else {
      setCalories('Please enter all fields correctly.');
    }
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-teal-500 sm:text-3xl">
            Calculate Your Daily Calorie Needs!
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            This calculator estimates your daily calorie needs based on your age, gender, weight, height, and activity level.
          </p>

          <form 
            onSubmit={calculateCalories} 
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter your age"
              />
            </div>

            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
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
                placeholder="Enter your weight"
              />
            </div>

            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                Height (in centimeters)
              </label>
              <input
                type="number"
                step="0.1"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter your height"
              />
            </div>

            <div>
              <label htmlFor="activityLevel" className="block text-sm font-medium text-gray-700">
                Activity Level
              </label>
              <select
                id="activityLevel"
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              >
                <option value="">Select activity level</option>
                <option value="sedentary">Sedentary (little or no exercise)</option>
                <option value="light">Light (light exercise/sports 1-3 days/week)</option>
                <option value="moderate">Moderate (moderate exercise/sports 3-5 days/week)</option>
                <option value="active">Active (hard exercise/sports 6-7 days/week)</option>
                <option value="veryActive">Very Active (very hard exercise/sports & physical job)</option>
              </select>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-teal-500 px-5 py-3 text-sm font-medium text-white"
            >
              Calculate Calories
            </button>
          </form>

          {calories && (
            <div className="mt-4 text-center">
              <p className="text-lg font-medium">Your Daily Calorie Requirement: {calories}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CalorieCalculator;
