import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <section>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <span>IMAGEN</span>
        </div>
        <div>
          <span>Productos de calidad para tu celular</span>
          <p>
            La mejor opción en cuanto a tecnología en todo el mercado y al
            alcance de tu mano{" "}
          </p>
          <Button colorScheme="teal" size={"sm"}>
            Ver más
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <span>Descubre y adquiere celulares de ultima generación</span>
          <span className="text-xs">
            Te ofrecemos un excelente servicio a la mejor calidad/precio
          </span>
          <Button colorScheme="teal" size={"md"}>
            Cuentame más
          </Button>
        </div>
        <div></div>
      </div>
      <div>
        <span className="">Asociado con</span>
        <div className="flex gap-4 justify-between items-center">
          <span>Interdominios</span>
          <span>Argored</span>
          <span>Nerion networks</span>
          <span>digival.es</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <span>IMAGEN</span>
        <div>
          <span className="uppercase text-xs">Ventas</span>
          <span className="capitalize">Compra Lo ultimo en celulares</span>
          <p>Te ofrecemos un excelente servicio a la mejor calidad/precio</p>
          <Button colorScheme="teal" variant={"outline"}>
            Ir a la tienda
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <span className="uppercase text-xs">Nosotros</span>
          <span className="capitalize">
            Somos una empresa que le da un excelente servicio a sus cliente
          </span>
          <p>Garantizamos que tu compra sea satisfactoria </p>
          <Button colorScheme="teal" variant={"outline"}>
            Ubicanos
          </Button>
        </div>
        <span>IMAGEN</span>
      </div>
      <div className="flex flex-col mb-4">
        <span className="text-xs">Testimonios</span>
        <span>Lee lo que otros tienen para decir</span>
        <div className="flex gap-6">
          <Card className="text-left">
            <CardHeader>
              <Heading size="md">Client Report</Heading>
            </CardHeader>
            <CardBody>
              <Stack divider={<StackDivider />} spacing={"4"}>
                <Box>
                  <Heading size={"xs"} textTransform={"uppercase"}>
                    Summary
                  </Heading>
                  <Text pt="2" fontSize={"sm"}>
                    View a summary of all your clients over the last month.
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
          <Card className="text-left">
            <CardHeader>
              <Heading size="md">Client Report</Heading>
            </CardHeader>
            <CardBody>
              <Stack divider={<StackDivider />} spacing={"4"}>
                <Box>
                  <Heading size={"xs"} textTransform={"uppercase"}>
                    Summary
                  </Heading>
                  <Text pt="2" fontSize={"sm"}>
                    View a summary of all your clients over the last month.
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
          <Card className="text-left">
            <CardHeader>
              <Heading size="md">Client Report</Heading>
            </CardHeader>
            <CardBody>
              <Stack divider={<StackDivider />} spacing={"4"}>
                <Box>
                  <Heading size={"xs"} textTransform={"uppercase"}>
                    Summary
                  </Heading>
                  <Text pt="2" fontSize={"sm"}>
                    View a summary of all your clients over the last month.
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-center items-center">
        <span className="uppercase">¿Estas listo?</span>
        <p className="uppercase">Se parte de nuestra gran familia y adquiere tu dispositivo movil</p>
        <Button colorScheme="teal" variant={"ghost"} className="">Comienza Ahora</Button>
      </div>
    </section>
  );
};

export default Home;
