import { useAuthStore } from "@/store";
import { NavLink } from "@mantine/core";
import {
  BaggageClaim,
  Layers3,
  LayoutDashboard,
  LogOut,
  Scroll,
  User2,
} from "lucide-react";
import { Link } from "react-router-dom";

const SidebarAdmin = () => {
  const { logout } = useAuthStore();

  return (
    <div className="p-4 flex flex-col h-screen">
      <div className="flex justify-center items-center">
        <img
          src="/images/logo.jpg"
          alt=""
          className="rounded-full w-24 h-24"
        />
      </div>
      <div className="flex-grow">
        <NavLink
          component={Link}
          to="/admin"
          label="Dashboard"
          leftSection={<LayoutDashboard />}
        />
        <NavLink
          component={Link}
          to="/admin/products"
          label="Usuarios"
          leftSection={<User2 />}
        />
        <NavLink
          component={Link}
          to="/admin/products"
          label="Productos"
          leftSection={<Scroll />}
        />
        <NavLink
          component={Link}
          to="/admin/categories"
          label="Categorias"
          leftSection={<Layers3 />}
        />
        <NavLink
          component={Link}
          to="/admin/orders"
          label="Ordenes"
          leftSection={<BaggageClaim />}
        />
      </div>
      <NavLink
        component="button"
        onClick={logout}
        label="Cerrar Sesion"
        leftSection={<LogOut />}
      />
    </div>
  );
};

export default SidebarAdmin;
