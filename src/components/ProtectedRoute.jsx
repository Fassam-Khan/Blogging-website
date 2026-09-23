import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Firebase user:", currentUser);

      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Firebase abhi user check kar raha hai
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // User logged in nahi hai
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // User logged in hai
  return children;
};

export default ProtectedRoute;