import { useAuth } from "@shared/context/AuthContext";
import { Navigate } from "react-router-dom";

const AuthProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" />;

  return children;
};
export default AuthProtectedLayout;
