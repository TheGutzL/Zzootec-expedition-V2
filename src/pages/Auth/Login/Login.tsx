import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="rounded-xl bg-gray-300 p-4 my-4 w-1/3 mx-auto shadow-xl">
        <span className="font-bold text-xl">Inicie Sesion</span>
        <form className="space-y-4">
          <button
            type="submit"
            className="w-full"
          >
            Iniciar Sesion
          </button>
        </form>
        <div className="mt-4">
          <span className="text-xs font-semibold">
            ¿No tienes una cuenta? <Link to="signup">Registrate</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
