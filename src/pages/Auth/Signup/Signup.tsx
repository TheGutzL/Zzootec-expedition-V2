import {
  Anchor,
  Button,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { CheckCircle, Lock, User } from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Paper
        shadow="md"
        p="lg"
        radius="md"
        className="w-full max-w-md"
      >
        <Title
          order={2}
          className="mb-6 text-center"
        >
          Regístrese
        </Title>
        <form className="space-y-4">
          <TextInput
            label="Nombre de usuario"
            description="Elige un nombre de usuario único"
            placeholder="Nombre de usuario"
            leftSection={<User size={18} />}
          />
          <PasswordInput
            label="Contraseña"
            description="Crea una contraseña segura"
            placeholder="Contraseña"
            leftSection={<Lock size={18} />}
          />
          <PasswordInput
            label="Confirmar Contraseña"
            description="Confirma tu contraseña"
            placeholder="Contraseña"
            leftSection={<CheckCircle size={18} />}
          />
          <Button
            fullWidth
            color="blue"
            radius="md"
            size="md"
          >
            Registrarse
          </Button>
        </form>
        <Text
          className="text-center"
          size="sm"
          mt="md"
        >
          ¿Ya tienes una cuenta?{" "}
          <Anchor
            component={Link}
            to="/login"
            size="sm"
          >
            Inicia Sesión
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
};

export default Signup;
