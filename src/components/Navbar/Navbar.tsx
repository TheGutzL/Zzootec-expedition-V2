import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../Theme";
import { Button } from "../ui/button";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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
          <Link to={"/"}>
            <Button
              variant="link"
              className="text-white"
            >
              Inicio
            </Button>
          </Link>
          <Link to={"/"}>
            <Button
              variant="link"
              className="text-white"
            >
              Nosotros
            </Button>
          </Link>
          <Link to={"/"}>
            <Button
              variant="link"
              className="text-white"
            >
              Tienda
            </Button>
          </Link>
          <Link to={"/"}>
            <Button
              variant="link"
              className="text-white"
            >
              Contactanos
            </Button>
          </Link>
          <Link to={"/"}>
            <Button
              variant="link"
              className="text-white"
            >
              Ubicanos
            </Button>
          </Link>
        </ul>
        <div className="flex justify-center items-center gap-4">
          <Button onClick={toggleTheme}>
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
          <Link to="/login">
            <Button variant="secondary">Iniciar Sesion</Button>
          </Link>
          <Link to="/signup">
            <Button variant="secondary">Registrarse</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
