import { Button, PasswordInput, TextInput } from "@mantine/core";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mx-auto">
      <div className="rounded-xl bg-gray-100 p-4 my-4 w-1/3 mx-auto shadow-xl">
        <span className="font-bold text-xl">Inicie Sesion</span>
        <form className="space-y-4">
          <TextInput
            label="Username"
            description="Username"
            placeholder="Username"
            leftSection={<User />}
          />
          <PasswordInput
            label="Password"
            description="Password"
            placeholder="Contraseña"
          />
          <Button>Iniciar Sesion</Button>
        </form>
        <div className="mt-4">
          <span className="text-xs font-semibold">
            ¿No tienes una cuenta? <Link to="/signup">Registrate</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
