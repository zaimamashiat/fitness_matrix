// Import necessary dependencies
import React, { useState, useEffect } from 'react';

const WorkoutRoutine = () => {
  const [selectedDay, setSelectedDay] = useState("Today");
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const workoutSchedule = [
    {
        day: "Sunday",
        workout: "Full Body Stretch",
        duration: "20-30 mins",
        exercises: [
          "Cat-Cow Stretch - 3 sets of 10 reps",
          "Child's Pose - 3 sets of 20 seconds",
          "Cobra Stretch - 3 sets of 15 seconds",
          "Forward Fold - 3 sets of 20 seconds",
          "Butterfly Stretch - 3 sets of 15 seconds"
        ]
      },
    {
      day: "Today",
      workout: "Push Workout A",
      duration: "35-50 mins",
      plan: {
        title: "Five-day PPL Split + cardio",
        frequency: 5,
        duration: "50-65 mins per day",
        description:
          "Five days a week of lifting with a focus on barbell lifts. Two lower body workouts, two pull workouts, and two push workouts that get rotated through every 6 lifting days. The ideal setup for anyone who wants to train 5 days/week and build a great physique (as well as getting stronger). Also allows for the possibility of shorter workouts with similar results to less frequent routines since the work is split over so many days."
      },
      exercises: [
        "Bench Press - 3 sets of 12 reps",
        "Incline Dumbbell Press - 3 sets of 10 reps",
        "Push-ups - 3 sets of 15 reps",
        "Overhead Dumbbell Press - 3 sets of 12 reps",
        "Tricep Dips - 3 sets of 10 reps"
      ]
    },

    {
      day: "Monday",
      workout: "Pull Workout A",
      duration: "30-40 mins",
      exercises: [
        "Pull-ups - 3 sets of 8 reps",
        "Barbell Rows - 3 sets of 10 reps",
        "Lat Pulldowns - 3 sets of 12 reps",
        "Bicep Curls - 3 sets of 15 reps",
        "Face Pulls - 3 sets of 12 reps"
      ]
    },
    {
      day: "Tuesday",
      workout: "Rest Day",
      duration: "-",
      exercises: []
    },
    {
      day: "Wednesday",
      workout: "Leg Workout A",
      duration: "40-50 mins",
      exercises: [
        "Squats - 3 sets of 12 reps",
        "Lunges - 3 sets of 10 reps per leg",
        "Deadlifts - 3 sets of 10 reps",
        "Leg Press - 3 sets of 12 reps",
        "Calf Raises - 3 sets of 15 reps"
      ]
    },
    {
      day: "Thursday",
      workout: "Rest Day",
      duration: "-",
      exercises: []
    },
    {
      day: "Friday",
      workout: "Push Workout B",
      duration: "35-50 mins",
      exercises: [
        "Incline Bench Press - 3 sets of 10 reps",
        "Dumbbell Flyes - 3 sets of 12 reps",
        "Arnold Press - 3 sets of 10 reps",
        "Push-ups - 3 sets of 20 reps",
        "Tricep Kickbacks - 3 sets of 12 reps"
      ]
    },
    {
      day: "Saturday",
      workout: "Pull Workout B",
      duration: "30-40 mins",
      exercises: [
        "Deadlifts - 3 sets of 10 reps",
        "Barbell Rows - 3 sets of 10 reps",
        "Chin-ups - 3 sets of 8 reps",
        "Dumbbell Shrugs - 3 sets of 12 reps",
        "Hammer Curls - 3 sets of 12 reps"
      ]
    }
  ];

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  const stopTimer = () => {
    setIsTimerRunning(false);
  };

  const resetTimer = () => {
    setTimer(0);
    setIsTimerRunning(false);
  };

  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else if (!isTimerRunning && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  const selectedWorkout = workoutSchedule.find(
    (workout) => workout.day === selectedDay
  );

  return (
    <div className="p-6 bg-white min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel */}
      <div className="lg:w-2/3 lg:pr-6">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Workout Routine</h1>
        {selectedWorkout && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              {selectedWorkout.workout}
            </h3>
            <p className="text-gray-600 mb-4 text-lg">
              Duration: {selectedWorkout.duration}
            </p>
            {selectedWorkout.plan && (
              <div className="border border-gray-300 p-4 rounded-lg mb-4 bg-gray-50">
                <h4 className="text-xl font-bold mb-2 text-gray-700">
                  {selectedWorkout.plan.title}
                </h4>
                <p className="text-gray-600 mb-2">
                  Days per week: {selectedWorkout.plan.frequency}
                </p>
                <p className="text-gray-600 mb-2">
                  Duration: {selectedWorkout.plan.duration}
                </p>
                <p className="text-gray-600 text-justify">
                  {selectedWorkout.plan.description}
                </p>
              </div>
            )}
            {selectedWorkout.exercises && (
              <div className="border border-gray-300 p-4 rounded-lg mb-4 bg-gray-50">
                <h4 className="text-xl font-bold mb-2 text-gray-700">Exercises</h4>
                <ul className="list-disc pl-6">
                  {selectedWorkout.exercises.map((exercise, index) => (
                    <li key={index} className="text-gray-600 mb-2">
                      {exercise}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="border border-gray-300 p-4 rounded-lg bg-gray-50">
              <h4 className="text-xl font-bold mb-2 text-gray-700">Set Timer</h4>
              <div className="flex justify-center items-center mb-4">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg
                    className="absolute top-0 left-0 w-full h-full"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="text-gray-300 stroke-current"
                      strokeWidth="3"
                      fill="none"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    ></path>
                    <path
                      className="text-orange-500 stroke-current"
                      strokeWidth="3"
                      strokeDasharray={`${(timer % 60) * 1.667}, 100`}
                      fill="none"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    ></path>
                  </svg>
                  <span className="text-xl font-bold text-gray-800">
                    {formatTime(timer)}
                  </span>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={startTimer}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 shadow-md"
                >
                  Start
                </button>
                <button
                  onClick={stopTimer}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 shadow-md"
                >
                  Stop
                </button>
                <button
                  onClick={resetTimer}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 shadow-md"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Right Panel */}
      <div className="lg:w-1/3">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Workout Schedule</h2>
        <div className="grid grid-cols-1 gap-4">
          {workoutSchedule.map((workout, index) => (
            <button
              key={index}
              onClick={() => handleDayClick(workout.day)}
              className={`p-4 rounded-lg text-white font-bold shadow-lg transition-all transform hover:scale-105 ${
                selectedDay === workout.day
                  ? "bg-gradient-to-r from-green-400 to-green-600"
                  : "bg-gradient-to-r from-green-300 to-green-500"
              } hover:from-green-500 hover:to-green-700`}
            >
              {workout.day} - {workout.workout}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default WorkoutRoutine;
