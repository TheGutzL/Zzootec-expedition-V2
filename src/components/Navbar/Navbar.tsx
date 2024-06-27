import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
} from "@chakra-ui/react";
import { SearchIcon } from "lucide-react";

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
          <InputGroup size="md">
            <InputLeftElement pointerEvents="none">
              <SearchIcon className="text-gray-300" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Buscar"
              variant="flushed"
              width="auto"
            />
          </InputGroup>
        </div>
        <ul className="flex items-center justify-between space-x-4">
          <Link color="teal.500">
            <span>Inicio</span>
          </Link>
          <Link color="teal.500">
            <span>Nosotros</span>
          </Link>
          <Link color="teal.500">
            <span>Tienda</span>
          </Link>
          <Link color="teal.500">
            <span>Contactanos</span>
          </Link>
          <Link color="teal.500">
            <span>Ubicanos</span>
          </Link>
        </ul>
        <div className="flex justify-center items-center gap-4">
          <Button colorScheme="teal" size="md">Iniciar Sesion</Button>
          <Button colorScheme="teal" size="md" variant="ghost">Registrarse</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
