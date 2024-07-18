import { loginSchema, LoginSchemaInfer } from "@/models";
import {
  Anchor,
  Button,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Lock, User } from "lucide-react";
import { zodResolver } from "mantine-form-zod-resolver";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const form = useForm<LoginSchemaInfer>({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: "",
    },
    validate: zodResolver(loginSchema),
  });

  const handleSubmit = (values: LoginSchemaInfer) => {
    try {
      toast.success("Inicio de sesion exitoso");
    } catch (error) {
      toast.error(`Error: ${error}`);
    }
  };

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
          Inicie Sesión
        </Title>
        <form
          className="space-y-4"
          onSubmit={form.onSubmit(handleSubmit)}
        >
          <TextInput
            label="Nombre de usuario"
            description="Introduce tu nombre de usuario"
            placeholder="Nombre de usuario"
            leftSection={<User size={18} />}
            {...form.getInputProps("username")}
          />
          <PasswordInput
            label="Contraseña"
            description="Introduce tu contraseña"
            placeholder="Contraseña"
            leftSection={<Lock size={18} />}
            {...form.getInputProps("password")}
          />
          <Button
            fullWidth
            type="submit"
            color="blue"
            radius="md"
            size="md"
          >
            Iniciar Sesión
          </Button>
        </form>
        <Text
          className="text-center"
          size="sm"
          mt="md"
        >
          ¿No tienes una cuenta?{" "}
          <Anchor
            component={Link}
            to="/signup"
            size="sm"
          >
            Regístrate
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
};

export default Login;
