import { Outlet } from "react-router-dom";
import { SidebarAdmin } from "../SidebarAdmin";

const AdminLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-12">
      <div className="col-span-2">
        <SidebarAdmin />
      </div>
      <div className="col-span-10 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
