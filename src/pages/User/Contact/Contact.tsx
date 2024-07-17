import { Button, Paper, TextInput, Textarea, Title } from "@mantine/core";
import { SendIcon } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-gray-50 flex justify-center items-center h-screen">
      <Paper
        shadow="md"
        p="md"
        radius="md"
        className="w-full max-w-lg bg-white"
      >
        <Title
          order={2}
          className="mb-4 text-gray-700"
        >
          Contáctanos
        </Title>
        <form className="space-y-4">
          <TextInput
            label="Nombre"
            placeholder="Tu nombre"
            classNames={{
              input:
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
              label: "block text-gray-700 text-sm font-bold mb-2",
            }}
          />
          <TextInput
            label="Correo Electrónico"
            placeholder="tucorreo@ejemplo.com"
            classNames={{
              input:
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
              label: "block text-gray-700 text-sm font-bold mb-2",
            }}
          />
          <TextInput
            label="Asunto"
            placeholder="Asunto del mensaje"
            classNames={{
              input:
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
              label: "block text-gray-700 text-sm font-bold mb-2",
            }}
          />
          <Textarea
            label="Mensaje"
            placeholder="Escribe tu mensaje aquí"
            classNames={{
              input:
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
              label: "block text-gray-700 text-sm font-bold mb-2",
            }}
            minRows={3}
          />
          <Button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            rightSection={<SendIcon size={14}/>}
          >
            Enviar
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Contact;
