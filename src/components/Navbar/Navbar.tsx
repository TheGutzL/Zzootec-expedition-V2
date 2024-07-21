import { useAuthStore } from "@/store";
import { Button, Menu } from "@mantine/core";
import { LogOut, Settings, ShoppingBag, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserButton } from "../UserButton";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuth, user, logout } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { label: "Inicio", to: "/" },
    { label: "Nosotros", to: "/about" },
    { label: "Tienda", to: "/store" },
    { label: "Contactanos", to: "/contact" },
    { label: "Ubicanos", to: "/location" },
  ];

  const onLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="bg-gray-200 py-4 drop-shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/images/logo.jpg"
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
                className="transition duration-150 ease-in-out"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {isAuth ? (
          <Menu
            shadow="md"
            width={200}
          >
            <Menu.Target>
              <UserButton
                image="https://images.unsplash.com/photo-1612838320302-3b3b3f1b3b3b"
                name={user?.firstName + " " + user?.lastName}
                email={user?.email ?? "No disponible"}
              />
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Aplicacion</Menu.Label>
              <Link to="/profile">
                <Menu.Item leftSection={<User className="w-4 h-4" />}>
                  Perfil
                </Menu.Item>
              </Link>
              <Link to="/cart">
                <Menu.Item leftSection={<ShoppingCart className="w-4 h-4" />}>
                  Carrito
                </Menu.Item>
              </Link>
              <Link to="/orders">
                <Menu.Item leftSection={<ShoppingBag className="w-4 h-4" />}>
                  Ordenes
                </Menu.Item>
              </Link>
              <Link to="/settings">
                <Menu.Item leftSection={<Settings className="w-4 h-4" />}>
                  Opciones
                </Menu.Item>
              </Link>
              <Menu.Item
                onClick={onLogout}
                leftSection={<LogOut className="w-4 h-4" />}
              >
                Cerrar Sesion
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Navbar;
