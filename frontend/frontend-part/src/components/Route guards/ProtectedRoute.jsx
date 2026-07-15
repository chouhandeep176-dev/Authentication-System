import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ children }) => {

  const user = useSelector((state) => state.userSlice.user);
  console.log("user data ", user);

  if (!user) {
    console.log("redirected to home page !")
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
