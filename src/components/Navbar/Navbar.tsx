import { Link } from "react-router-dom";

const Navbar = () => {
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
            <span className="text-white">Nosotros</span>
          </Link>
          <Link to={"/"}>
            <span className="text-white">Nosotros</span>
          </Link>
          <Link to={"/"}>
            <span className="text-white">Tienda</span>
          </Link>
          <Link to={"/"}>
            <span className="text-white">Contactanos</span>
          </Link>
          <Link to={"/"}>
            <span className="text-white">Ubicanos</span>
          </Link>
        </ul>
        <div className="flex justify-center items-center gap-4">
          {/* <span onClick={toggleTheme}>
            {theme === "dark" ? <Sun /> : <Moon />}
          </span> */}
          <Link to="/login">
            <span>Iniciar Sesion</span>
          </Link>
          <Link to="/signup">
            <span>Registrarse</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
