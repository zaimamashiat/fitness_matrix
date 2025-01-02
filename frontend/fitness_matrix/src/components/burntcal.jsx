import React from 'react'

function burntcal() {
  return (
    <div>
{/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg">
    <h1 className="text-center text-2xl font-bold text-teal-500 sm:text-3xl">Calorie Burn Calculator</h1>

    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
      Select the exercises, specify reps, sets, or time, and calculate the total calories burned.
    </p>

    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const exercises = {
          running: { caloriesPerRep: 0, caloriesPerSet: 0, caloriesPerMinute: 10 },
          cycling: { caloriesPerRep: 0, caloriesPerSet: 0, caloriesPerMinute: 8 },
          yoga: { caloriesPerRep: 0, caloriesPerSet: 0, caloriesPerMinute: 4 },
          swimming: { caloriesPerRep: 0, caloriesPerSet: 0, caloriesPerMinute: 13 },
          walking: { caloriesPerRep: 0, caloriesPerSet: 0, caloriesPerMinute: 5 },
          jumping: { caloriesPerRep: 0.2, caloriesPerSet: 2, caloriesPerMinute: 0 },
          pushups: { caloriesPerRep: 0.3, caloriesPerSet: 3, caloriesPerMinute: 0 },
          squats: { caloriesPerRep: 0.4, caloriesPerSet: 4, caloriesPerMinute: 0 },
          burpees: { caloriesPerRep: 0.5, caloriesPerSet: 5, caloriesPerMinute: 0 },
          planking: { caloriesPerRep: 0, caloriesPerSet: 0, caloriesPerMinute: 6 },
        };

        const exerciseInputs = Array.from(document.querySelectorAll(".exercise-entry"));
        let totalCalories = 0;

        exerciseInputs.forEach((exerciseEntry) => {
          const selectedExercise = exerciseEntry.querySelector("select").value;
          const reps = parseInt(exerciseEntry.querySelector("input[name='reps']").value) || 0;
          const sets = parseInt(exerciseEntry.querySelector("input[name='sets']").value) || 0;
          const time = parseFloat(exerciseEntry.querySelector("input[name='time']").value) || 0;

          if (selectedExercise && exercises[selectedExercise]) {
            const exerciseData = exercises[selectedExercise];
            totalCalories += (reps * exerciseData.caloriesPerRep) +
              (sets * exerciseData.caloriesPerSet) +
              (time * exerciseData.caloriesPerMinute);
          }
        });

        document.getElementById('result').innerHTML = `Total Calories Burned: ${totalCalories.toFixed(2)} kcal`;
        document.getElementById('form-view').style.display = 'none';
        document.getElementById('result-view').style.display = 'block';
      }}
      id="form-view"
      className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
    >
      <p className="text-center text-lg font-medium">Add Exercises</p>

      <div id="exercise-list" className="space-y-4">
        <div className="exercise-entry grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="exercise" className="block text-sm font-medium text-gray-700">
              Exercise
            </label>
            <select
              name="exercise"
              className="block w-full rounded-lg border-gray-200 p-2 text-sm shadow-sm"
            >
              <option value="">Select Exercise</option>
              <option value="running">Running</option>
              <option value="cycling">Cycling</option>
              <option value="yoga">Yoga</option>
              <option value="swimming">Swimming</option>
              <option value="walking">Walking</option>
              <option value="jumping">Jumping Jacks</option>
              <option value="pushups">Push-ups</option>
              <option value="squats">Squats</option>
              <option value="burpees">Burpees</option>
              <option value="planking">Planking</option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <input
              type="number"
              name="reps"
              className="block w-full rounded-lg border-gray-200 p-2 text-sm shadow-sm"
              placeholder="Reps"
              min="0"
              step="1"
            />

            <input
              type="number"
              name="sets"
              className="block w-full rounded-lg border-gray-200 p-2 text-sm shadow-sm"
              placeholder="Sets"
              min="0"
              step="1"
            />

            <input
              type="number"
              name="time"
              className="block w-full rounded-lg border-gray-200 p-2 text-sm shadow-sm"
              placeholder="Time (min)"
              min="0"
              step="1"
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => {
          const exerciseList = document.getElementById("exercise-list");
          const newExerciseEntry = exerciseList.firstElementChild.cloneNode(true);
          newExerciseEntry.querySelectorAll("input").forEach((input) => (input.value = ""));
          newExerciseEntry.querySelector("select").value = "";
          exerciseList.appendChild(newExerciseEntry);
        }}
        className="block w-full rounded-lg bg-gray-200 px-5 py-2 text-sm font-medium text-gray-400"
      >
        Add Another Exercise
      </button>

      <button
        type="submit"
        className="block w-full rounded-lg bg-teal-500 px-5 py-3 text-sm font-medium text-white"
      >
        Calculate Calories Burned
      </button>
    </form>

    <div id="result-view" style={{ display: 'none' }} className="text-center">
      <h2 className="text-2xl font-bold text-teal-500">Results</h2>
      <p id="result" className="mt-4 text-lg font-medium text-gray-700"></p>
      <button
        onClick={() => {
          document.getElementById('result-view').style.display = 'none';
          document.getElementById('form-view').style.display = 'block';
        }}
        className="mt-4 rounded-lg bg-teal-500 px-5 py-2 text-sm font-medium text-white"
      >
        Calculate Again
      </button>
    </div>
  </div>
</div>

    </div>
  )
}

export default burntcal