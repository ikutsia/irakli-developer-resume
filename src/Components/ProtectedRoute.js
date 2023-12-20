// ProtectedRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component }) => {
  //Previous version:  const ProtectedRoute = ({ element }) => {
  const isAuthenticated = true; // Replace with your authentication check

  if (isAuthenticated) {
    return (
      <Route element={<Component />} />
    ); /* Previous version:  return <Route element={element} />; */
  } else {
    return <Navigate to="/signin" />;
  }
};

export default ProtectedRoute;
