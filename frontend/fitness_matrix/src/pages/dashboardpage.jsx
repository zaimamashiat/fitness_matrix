import React from "react";
import Navbar from "../components/navbar";
import Userbanner from "../components/userbanner";
import ProgressTracker from "../components/progress-tracker";

function Dashboardpage() {
    return (
    <>
    <Navbar/>
    <Userbanner/>
    <ProgressTracker/>
    </>
    );
}

export default Dashboardpage;
