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
import Routinepage from "./pages/routinepage";
import Dietchartpage from "./pages/dietchartpage";
import Yogameditationpage from "./pages/yogameditationpage";
import Workoutvideopage from "./pages/workoutvideopage";
import Yogamusicpage from "./pages/yogamusicpage";
import Notfoundpage from "./pages/404page";
import Checkoutpage from "./pages/checkoutpage";
import Blogpage from "./pages/blogpage";
import Gymmappage from "./pages/gymmappage";
import Burntcalpage from "./pages/burntcalpage";
import CaloriesTrackerpage from "./pages/calorietracker";
import WaterIntakePage from './pages/WaterIntakeTracker';

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
                <Route path="/checkout" element={
                        <ProtectedRoute>
                            <Checkoutpage/>
                        </ProtectedRoute>
                    } />
                <Route path="/dashboard" element={
                        <ProtectedRoute>
                            <Dashboardpage/>
                        </ProtectedRoute>
                    } />
                <Route path="/workoutroutine" element={
                        <ProtectedRoute>
                            <Routinepage/>
                        </ProtectedRoute>
                    } />
                <Route path="/workoutvideo" element={
                        <ProtectedRoute>
                            <Workoutvideopage/>
                        </ProtectedRoute>
                    } />
                <Route path="/caloriestracker" element={
                        <ProtectedRoute>
                            <CaloriesTrackerpage/>
                        </ProtectedRoute>
                    } />
                <Route path="/dietchart" element={
                        <ProtectedRoute>
                            <Dietchartpage/>
                        </ProtectedRoute>
                    } />
                <Route path="/yoga" element={
                        <ProtectedRoute>
                            <Yogameditationpage/>
                        </ProtectedRoute>
                    } />
                <Route path="/yogamusic" element={
                        <ProtectedRoute>
                            <Yogamusicpage/>
                        </ProtectedRoute>
                    } />
                <Route path="/blog" element={
                        <ProtectedRoute>
                            <Blogpage/>
                        </ProtectedRoute>
                    } />
                <Route path="/gymmap" element={
                        <ProtectedRoute>
                            <Gymmappage/>
                        </ProtectedRoute>
                    } />
                <Route path="/burntcal" element={
                        <ProtectedRoute>
                            <Burntcalpage/>
                        </ProtectedRoute>
                    } />
                <Route path="/caltracker" element={
                        <ProtectedRoute>
                            <CaloriesTrackerpage/>
                        </ProtectedRoute>
                    } />
                <Route path="/water-intake" element={<WaterIntakePage />} />

                <Route path="*" element={<Notfoundpage />} />

            </Routes>
            <Toaster position="bottom-right"/>
        </div>
    );
}
export default App;
