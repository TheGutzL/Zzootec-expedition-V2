import { signupSchema, SignupSchemaInfer } from "@/models";
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
import { CheckCircle, Lock, Mail, User } from "lucide-react";
import { zodResolver } from "mantine-form-zod-resolver";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Signup = () => {
  const form = useForm<SignupSchemaInfer>({
    mode: "uncontrolled",
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validate: zodResolver(signupSchema),
  });

  const handleSubmit = (values: SignupSchemaInfer) => {
    try {
      toast.success("Registro");
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
          Regístrese
        </Title>
        <form
          className="space-y-4"
          onSubmit={form.onSubmit(handleSubmit)}
        >
          <TextInput
            label="Nombres"
            description="Escribe tus nombres"
            placeholder="Nombres"
            leftSection={<User size={18} />}
            {...form.getInputProps("firstName")}
          />
          <TextInput
            label="Apellidos"
            description="Escribe tus apellidos"
            placeholder="Apellidos"
            leftSection={<User size={18} />}
            {...form.getInputProps("lastName")}
          />
          <TextInput
            label="Email"
            description="Email de contacto"
            placeholder="Email"
            leftSection={<Mail size={18} />}
            {...form.getInputProps("email")}
          />
          <TextInput
            label="Nombre de usuario"
            description="Elige un nombre de usuario único"
            placeholder="Nombre de usuario"
            leftSection={<User size={18} />}
            {...form.getInputProps("username")}
          />
          <PasswordInput
            label="Contraseña"
            description="Crea una contraseña segura"
            placeholder="Contraseña"
            leftSection={<Lock size={18} />}
            {...form.getInputProps("password")}
          />
          <PasswordInput
            label="Confirmar Contraseña"
            description="Confirma tu contraseña"
            placeholder="Contraseña"
            leftSection={<CheckCircle size={18} />}
            {...form.getInputProps("confirmPassword")}
          />
          <Button
            type="submit"
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
