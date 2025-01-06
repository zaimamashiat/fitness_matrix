import React from "react";
import Navbar from "../components/navbar";
import Userbanner from "../components/userbanner";
import ProgressTracker from "../components/progress-tracker";
import Orders from "../components/OrderList";

function Dashboardpage() {
    return (
    <>
    <Navbar/>
    <Userbanner/>
    <ProgressTracker/>
    <Orders/>
    </>
    );
}

export default Dashboardpage;
