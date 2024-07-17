import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { label: "Inicio", to: "/" },
    { label: "Nosotros", to: "/about" },
    { label: "Tienda", to: "/store" },
    { label: "Contactanos", to: "/contact" },
    { label: "Ubicanos", to: "/location" },
  ];

  return (
    <div className="bg-zinc-800 py-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="./images/logo.jpg"
            alt="Logo"
            className="w-14 h-14 rounded-full"
          />
        </div>
        <ul className="flex items-center justify-between space-x-4">
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>
                <span className="text-white">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-4">
          <Link to="/login">
            <Button>Iniciar Sesion</Button>
          </Link>
          <Link to="/signup">
            <Button>Registrarse</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
