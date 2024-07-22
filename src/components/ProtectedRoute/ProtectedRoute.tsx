import { useAuthStore } from "@/store";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuth } = useAuthStore();

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
