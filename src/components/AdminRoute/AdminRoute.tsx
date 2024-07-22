import { useAuthStore } from "@/store";
import { Navigate } from "react-router-dom";
import { AdminLayout } from "../AdminLayout";

const AdminRoute = () => {
  const { user, isAuth } = useAuthStore();

  const isAdmin = user?.roles.some((role) => role.roleName === "ADMIN");

  return isAdmin && isAuth ? <AdminLayout /> : <Navigate to="/" />;
};

export default AdminRoute;
