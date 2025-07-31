import { useAuth } from "@shared/context/AuthContext";
import Spinner from "@shared/ui/Spinner";
import { Navigate } from "react-router-dom";

const AuthProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  if (isLoading)
    return (
      <div className="mt-[35vh]">
        <Spinner className="border-blue-600" />
      </div>
    );
  if (!user) return <Navigate to="/login" />;

  return children;
};
export default AuthProtectedLayout;
