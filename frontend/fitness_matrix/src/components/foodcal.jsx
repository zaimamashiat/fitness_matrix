import React, { useState } from "react";
import "./FoodCalculator.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import OAuth from "oauth-1.0a";
import CryptoJS from "crypto-js";

function CalorieCalculator() {
  const [food, setFood] = useState("");
  const [calories, setCalories] = useState(0);
  const [macros, setMacros] = useState({ protein: 0, fat: 0, carbs: 0 });
  const [waterIntake, setWaterIntake] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const fetchAccessToken = async () => {
    const tokenUrl = "https://oauth.fatsecret.com/connect/token";
    const clientId = "3c1b07102f5d43dfa8c2e4bff40803e4";
    const clientSecret = "b056e1bf92964355bce30c793ba40439";
  
    const body = new URLSearchParams();
    body.append("grant_type", "client_credentials");
    body.append("scope", "basic");
  
    try {
      const response = await fetch(tokenUrl, {
        method: "POST",
        headers: {
          Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
      });
  
      const data = await response.json();
      if (data.access_token) {
        return data.access_token;
      } else {
        throw new Error("Failed to retrieve access token.");
      }
    } catch (error) {
      console.error("Error fetching access token:", error);
      throw error;
    }
  };
  
  const handleFoodSubmit = async () => {
    if (!food) {
      alert("Please enter a food item.");
      return;
    }
  
    try {
      const accessToken = await fetchAccessToken();
      const apiUrl = `https://platform.fatsecret.com/rest/server.api?method=foods.search&search_expression=${encodeURIComponent(
        food
      )}&format=json`;
  
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
  
      const data = await response.json();
  
      if (data.foods && data.foods.food) {
        const foodItem = Array.isArray(data.foods.food)
          ? data.foods.food[0]
          : data.foods.food;
  
        setCalories(parseInt(foodItem.calories) || 0);
        setMacros({
          protein: parseFloat(foodItem.protein) || 0,
          fat: parseFloat(foodItem.fat) || 0,
          carbs: parseFloat(foodItem.carbohydrate) || 0,
        });
      } else {
        alert("No nutrition data found for the entered food item.");
      }
    } catch (error) {
      console.error("Error fetching food data:", error);
      alert("Failed to fetch nutrition data. Please try again.");
    }
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
          <h1 style={{ fontSize: "28px", color: "#00796b" }}>Food Calorie Counter</h1>
        </header>

        <div className="calculator" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
          <div className="left-panel" style={{ backgroundColor: "#ffffff", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <h2 style={{ fontSize: "20px", color: "#00796b" }}>Track Your Food</h2>
            <div className="input-group" style={{ marginTop: "20px" }}>
              <label style={{ fontSize: "16px", color: "#00796b" }}>Food Item</label>
              <input
                type="text"
                placeholder="Enter food name"
                value={food}
                onChange={(e) => setFood(e.target.value)}
                style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #00796b", marginTop: "10px" }}
              />
              <button
                className="calculate-btn"
                onClick={handleFoodSubmit}
                style={{ marginTop: "10px", padding: "10px 20px", borderRadius: "5px", backgroundColor: "#00796b", color: "#fff", border: "none", cursor: "pointer" }}
              >
                Check Nutrition
              </button>
              <button
                className="add-calorie-btn"
                onClick={handleAddCalories}
                style={{ marginTop: "10px", padding: "10px 20px", borderRadius: "5px", backgroundColor: "#ffe0b2", color: "#00796b", border: "none", cursor: "pointer" }}
              >
                Add to Total Calories
              </button>
            </div>
            <div className="daily-rate" style={{ marginTop: "20px" }}>
              <h3 style={{ fontSize: "18px", color: "#00796b" }}>Nutrition Info</h3>
              <p style={{ fontSize: "16px", color: "#00796b" }}>Calories: {calories} kcal</p>
              <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <CircularProgressbar
                    value={(macros.protein / (macros.protein + macros.fat + macros.carbs)) * 100}
                    text={`${macros.protein}g`}
                    styles={buildStyles({
                      pathColor: "#00796b",
                      textColor: "#00796b",
                      textSize: "12px",
                    })}
                    style={{ width: "100px" }}
                  />
                  <p style={{ marginTop: "5px", fontSize: "12px", color: "#00796b" }}>Protein</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <CircularProgressbar
                    value={(macros.fat / (macros.protein + macros.fat + macros.carbs)) * 100}
                    text={`${macros.fat}g`}
                    styles={buildStyles({
                      pathColor: "#ff7043",
                      textColor: "#00796b",
                      textSize: "12px",
                    })}
                    style={{ width: "100px" }}
                  />
                  <p style={{ marginTop: "5px", fontSize: "12px", color: "#00796b" }}>Fat</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <CircularProgressbar
                    value={(macros.carbs / (macros.protein + macros.fat + macros.carbs)) * 100}
                    text={`${macros.carbs}g`}
                    styles={buildStyles({
                      pathColor: "#ffe0b2",
                      textColor: "#00796b",
                      textSize: "12px",
                    })}
                    style={{ width: "100px" }}
                  />
                  <p style={{ marginTop: "5px", fontSize: "12px", color: "#00796b" }}>Carbs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="right-panel" style={{ backgroundColor: "#ffffff", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <div style={{ marginBottom: "40px" }}>
              <h2 style={{ fontSize: "20px", color: "#00796b" }}>Water Intake Tracker</h2>
              <div style={{ marginTop: "20px", marginBottom: "20px", width: "150px", height: "150px", margin: "auto" }}>
                <CircularProgressbar
                  value={(waterIntake / 3000) * 100}
                  text={`${waterIntake} ml`}
                  styles={buildStyles({
                    pathColor: "#00796b",
                    textColor: "#00796b",
                  })}
                />
              </div>
              <div className="input-group" style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                <button
                  className="calculate-btn"
                  onClick={() => handleWaterInput(250)}
                  style={{ padding: "10px 20px", borderRadius: "5px", backgroundColor: "#00796b", color: "#fff", border: "none", cursor: "pointer" }}
                >
                  Add 250ml
                </button>
                <button
                  className="calculate-btn"
                  onClick={() => setWaterIntake(0)}
                  style={{ padding: "10px 20px", borderRadius: "5px", backgroundColor: "#ff7043", color: "#fff", border: "none", cursor: "pointer" }}
                >
                  Reset
                </button>
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: "20px", color: "#00796b" }}>Total Calories Consumed</h2>
              <div style={{ marginTop: "20px", width: "150px", height: "150px", margin: "auto" }}>
                <CircularProgressbar
                  value={(totalCalories / 2000) * 100}
                  text={`${totalCalories} kcal`}
                  styles={buildStyles({
                    pathColor: "#ffe0b2",
                    textColor: "#00796b",
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
