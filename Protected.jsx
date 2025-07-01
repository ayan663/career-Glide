// components/ProtectedRoute.jsx
import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return null; // Optionally add a loader

  return isSignedIn ? children : <Navigate to="/Signin" />;
};

export default ProtectedRoute;
