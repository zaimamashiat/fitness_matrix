import React, { useState } from "react";
import "./FoodCalculator.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CalorieCalculator() {
  const [food, setFood] = useState("");
  const [calories, setCalories] = useState(0);
  const [macros, setMacros] = useState({ protein: 0, fat: 0, carbs: 0 });
  const [waterIntake, setWaterIntake] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleFoodSubmit = async () => {
    const mockResponse = {
      calories: 250,
      protein: 20,
      fat: 10,
      carbs: 30,
    };
    setCalories(mockResponse.calories);
    setMacros({
      protein: mockResponse.protein,
      fat: mockResponse.fat,
      carbs: mockResponse.carbs,
    });
  };

  const handleAddCalories = () => {
    setTotalCalories((prev) => prev + calories);
  };

  const handleWaterInput = (amount) => {
    setWaterIntake((prev) => Math.min(prev + amount, 3000));
  };

  return (
    <div className="calorie-calculator" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
      <main className="main-content" style={{ padding: "20px" }}>
        <header className="header" style={{ marginBottom: "20px" }}>
          <h1 style={{ fontSize: "28px", color: "#333" }}>Food Calorie Counter</h1>
        </header>

        <div className="calculator" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
          <div className="left-panel" style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <h2 style={{ fontSize: "20px", color: "#333" }}>Track Your Food</h2>
            <div className="input-group" style={{ marginTop: "20px" }}>
              <label style={{ fontSize: "16px", color: "#555" }}>Food Item</label>
              <input
                type="text"
                placeholder="Enter food name"
                value={food}
                onChange={(e) => setFood(e.target.value)}
                style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", marginTop: "10px" }}
              />
              <button
                className="calculate-btn"
                onClick={handleFoodSubmit}
                style={{ marginTop: "10px", padding: "10px 20px", borderRadius: "5px", backgroundColor: "#38b2ac", color: "#fff", border: "none", cursor: "pointer" }}
              >
                Check Nutrition
              </button>
              <button
                className="add-calorie-btn"
                onClick={handleAddCalories}
                style={{ marginTop: "10px", padding: "10px 20px", borderRadius: "5px", backgroundColor: "#ffa726", color: "#fff", border: "none", cursor: "pointer" }}
              >
                Add to Total Calories
              </button>
            </div>
            <div className="daily-rate" style={{ marginTop: "20px" }}>
              <h3 style={{ fontSize: "18px", color: "#333" }}>Nutrition Info</h3>
              <p style={{ fontSize: "16px", color: "#555" }}>Calories: {calories} kcal</p>
              <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "10px" }}>
                <CircularProgressbar
                  value={(macros.protein / (macros.protein + macros.fat + macros.carbs)) * 100}
                  text={`${macros.protein}g`}
                  styles={buildStyles({
                    pathColor: "#38b2ac",
                    textColor: "#333",
                    textSize: "12px",
                  })}
                  style={{ width: "100px" }}
                />
                <CircularProgressbar
                  value={(macros.fat / (macros.protein + macros.fat + macros.carbs)) * 100}
                  text={`${macros.fat}g`}
                  styles={buildStyles({
                    pathColor: "#ff6f61",
                    textColor: "#333",
                    textSize: "12px",
                  })}
                  style={{ width: "100px" }}
                />
                <CircularProgressbar
                  value={(macros.carbs / (macros.protein + macros.fat + macros.carbs)) * 100}
                  text={`${macros.carbs}g`}
                  styles={buildStyles({
                    pathColor: "#ffa726",
                    textColor: "#333",
                    textSize: "12px",
                  })}
                  style={{ width: "100px" }}
                />
              </div>
            </div>
          </div>

          <div className="right-panel" style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <div style={{ marginBottom: "40px" }}>
              <h2 style={{ fontSize: "20px", color: "#333" }}>Water Intake Tracker</h2>
              <div style={{ marginTop: "20px", marginBottom: "20px", width: "150px", height: "150px", margin: "auto" }}>
                <CircularProgressbar
                  value={(waterIntake / 3000) * 100}
                  text={`${waterIntake} ml`}
                  styles={buildStyles({
                    pathColor: "#38b2ac",
                    textColor: "#333",
                  })}
                />
              </div>
              <div className="input-group" style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                <button
                  className="calculate-btn"
                  onClick={() => handleWaterInput(250)}
                  style={{ padding: "10px 20px", borderRadius: "5px", backgroundColor: "#38b2ac", color: "#fff", border: "none", cursor: "pointer" }}
                >
                  Add 250ml
                </button>
                <button
                  className="calculate-btn"
                  onClick={() => setWaterIntake(0)}
                  style={{ padding: "10px 20px", borderRadius: "5px", backgroundColor: "#ff6f61", color: "#fff", border: "none", cursor: "pointer" }}
                >
                  Reset
                </button>
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: "20px", color: "#333" }}>Total Calories Consumed</h2>
              <div style={{ marginTop: "20px", width: "150px", height: "150px", margin: "auto" }}>
                <CircularProgressbar
                  value={(totalCalories / 2000) * 100}
                  text={`${totalCalories} kcal`}
                  styles={buildStyles({
                    pathColor: "#ffa726",
                    textColor: "#333",
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CalorieCalculator;
