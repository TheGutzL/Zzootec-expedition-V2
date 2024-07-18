import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />

      <Toaster closeButton richColors position="bottom-right"/>
    </div>
  );
};

export default Layout;
