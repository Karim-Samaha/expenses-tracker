import { useAuth } from "@shared/context/AuthContext";
import Spinner from "@shared/ui/Spinner";
import { Navigate } from "react-router-dom";

const AuthProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();

  return (
    <section className="min-h-screen flex items-center justify-center">
      {isLoading ? (
        <Spinner className="border-blue-600" />
      ) : !user ? (
        <Navigate to="/login" />
      ) : (
        children
      )}
    </section>
  );
};
export default AuthProtectedLayout;
