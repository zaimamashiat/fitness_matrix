import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("authToken"); // Check if the user is authenticated

    if (!token) {
        // If not authenticated, redirect to the login page
        return <Navigate to="/" replace />;
    }

    // If authenticated, render the child components (protected page)
    return children;
};

export default ProtectedRoute;
