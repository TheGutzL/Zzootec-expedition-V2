import { useAuthStore } from "@/store";
import { Avatar, Button, Group, Text } from "@mantine/core";

const Profile = () => {
  const { user } = useAuthStore();

  return (
    <div className="container mx-auto ">
      <div className="flex flex-col items-center justify-center p-4 max-w-4xl bg-white shadow-lg rounded-lg mx-auto mt-10">
        <Avatar
          src="https://avatars.githubusercontent.com/u/your-avatar"
          size="lg"
          radius="xl"
        />
        <span className="mt-2 w-[500px]">
          Nombre de Usuario: {user?.username}
        </span>
        <span className="mt-2 w-[500px]">Nombres: {user?.firstName}</span>
        <span className="mt-2 w-[500px]">Apellidos: {user?.lastName}</span>
        <span className="mt-2 w-[500px]">Email: {user?.email}</span>
        <span className="mt-2 w-[500px]">Calle: {user?.address?.street}</span>
        <span className="mt-2 w-[500px]">
          Numero de casa: {user?.address?.houseNumber}
        </span>
        <span className="mt-2 w-[500px]">
          Codigo zip: {user?.address?.zipCode}
        </span>
        <Text size="sm">usuario@ejemplo.com</Text>
        <Group className="mt-4">
          <Button
            variant="light"
            color="blue"
          >
            Editar Perfil
          </Button>
          <Button
            variant="light"
            color="red"
          >
            Cerrar Sesión
          </Button>
        </Group>
      </div>
    </div>
  );
};

export default Profile;
