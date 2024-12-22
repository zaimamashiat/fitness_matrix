import React from 'react';

function TrackerCard() {
  return (
    <div className="my-8 px-4">
      {/* Title */}
      <h2 className="text-2xl font-bold text-teal-500 sm:text-3xl text-center mb-8">
        Track Your Progress
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Card 1: Calculate Your BMI */}
        <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt="Calculate Your BMI"
            src="https://images.unsplash.com/photo-1470167290877-7d5d3446de4c?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <h3 className="mt-0.5 text-lg text-white">Calculate Your BMI</h3>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Determine your Body Mass Index (BMI) to assess your body weight relative to your height.
              </p>
              <a
                href="/bmi-calculator"
                className="mt-4 inline-block text-sm font-medium text-blue-400 hover:underline"
              >
                Start Now →
              </a>
            </div>
          </div>
        </article>

        {/* Card 2: Calculate Required Calories */}
        <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt="Calculate Required Calories"
            src="https://images.unsplash.com/photo-1629121958394-3be95d8c057c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <h3 className="mt-0.5 text-lg text-white">Calculate Required Calories</h3>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Find out how many calories your body needs daily to maintain your current weight.
              </p>
              <a
                href="/calorie-requirement"
                className="mt-4 inline-block text-sm font-medium text-blue-400 hover:underline"
              >
                Start Now →
              </a>
            </div>
          </div>
        </article>

        {/* Card 3: Calculate Burnt Calories */}
        <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt="Calculate Burnt Calories"
            src="https://images.unsplash.com/photo-1434596922112-19c563067271?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <h3 className="mt-0.5 text-lg text-white">Calculate Burnt Calories</h3>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Track the calories you've burned through workouts and activities.
              </p>
              <a
                href="/calorie-burn"
                className="mt-4 inline-block text-sm font-medium text-blue-400 hover:underline"
              >
                Start Now →
              </a>
            </div>
          </div>
        </article>

        {/* Card 4: Calculate Calorie Intake */}
        <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt="Calculate Calorie Intake"
            src="https://images.unsplash.com/photo-1648421714382-70d47442b354?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <h3 className="mt-0.5 text-lg text-white">Calculate Calorie Intake</h3>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Monitor your daily calorie intake to stay on track with your fitness goals.
              </p>
              <a
                href="/calorie-intake"
                className="mt-4 inline-block text-sm font-medium text-blue-400 hover:underline"
              >
                Start Now →
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default TrackerCard;
