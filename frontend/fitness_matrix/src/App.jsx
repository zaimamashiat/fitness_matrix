import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/loginpage";
import BMIPage from "./pages/bmipage";
import RecipePage from "./pages/recipepage";
import CalorieCalculatorPage from "./pages/caloriecalculatorpage";
import CreateAccountPage from "./pages/createaccountpage";
import Shop from "./pages/shoppage";
function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/createaccount" element={<CreateAccountPage />} />
                <Route path="/bmi" element={<BMIPage />} />
                <Route path="/recipe" element={<RecipePage />} />
                <Route
                    path="/caloriescalc"
                    element={<CalorieCalculatorPage />}
                
                />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </div>
    );
}
export default App;
