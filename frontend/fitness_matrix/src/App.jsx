import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Toaster } from 'sonner';

import HomePage from "./pages/homepage";
import LoginPage from "./pages/loginpage";
import BMIPage from "./pages/bmipage";
import RecipePage from "./pages/recipepage";
import CalorieCalculatorPage from "./pages/caloriecalculatorpage";
import CreateAccountPage from "./pages/createaccountpage";
import Shop from "./pages/shoppage";
import Dashboardpage from "./pages/dashboardpage";
import ProtectedRoute from "./components/protectedpage";


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
                <Route path="/dashboard" element={
                        <ProtectedRoute>
                            <Dashboardpage/>
                        </ProtectedRoute>
                    } />
            </Routes>
            <Toaster position="bottom-right"/>
        </div>
    );
}
export default App;
