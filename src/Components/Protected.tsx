import { Navigate } from "react-router-dom";

interface ProtectedProps {
  children: React.ReactNode;
}

function Protected({ children }: ProtectedProps) {
const token = localStorage.getItem("token");
  if (token) {
    return <>{children}</>; // Render the children if the token is present
  } else {
    return <Navigate to="/login" />; // Navigate to login page if the token is absent
  }
}

export default Protected;
