import { useState } from "react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { label: "Inicio", to: "/" },
    { label: "Nosotros", to: "/about" },
    { label: "Tienda", to: "/store" },
    { label: "Contactanos", to: "/contact" },
    { label: "Ubicanos", to: "/location" },
  ];

  return (
    <div className="bg-slate-900 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="./images/logo.jpg"
            alt="Logo"
            className="w-14 h-14 rounded-full"
          />
          <button
            className="md:hidden ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`flex-col md:flex-row md:flex items-center space-x-0 md:space-x-6 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {links.map((link) => (
            <li
              key={link.to}
              className="hover:underline mt-2 md:mt-0"
            >
              <Link
                to={link.to}
                className="text-white hover:text-gray-300 transition duration-150 ease-in-out"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button
              variant="outline"
              color="gray"
              size="xs"
              className="text-white border-white hover:border-gray-300"
            >
              Iniciar Sesión
            </Button>
          </Link>
          <Link to="/signup">
            <Button
              color="blue"
              size="xs"
              className="text-white bg-blue-500 hover:bg-blue-600"
            >
              Registrarse
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
