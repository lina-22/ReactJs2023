import React from "react";
import { Navigate } from "react-router-dom";

export default function Protected({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}
