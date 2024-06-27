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
    <section className="bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-2 py-8">
          <div className="flex justify-center items-center w-full h-full">
            <img
              src="./images/undraw_modern_design.svg"
              alt="Phone"
              className="w-4/5 h-4/5"
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-3xl font-bold">
              Productos de calidad para tu celular
            </span>
            <p className="text-2xl">
              La mejor opción en cuanto a tecnología en todo el mercado y al
              alcance de tu mano{" "}
            </p>
            <Button
              colorScheme="teal"
              size={"md"}
              width="150px"
            >
              Ver más
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-4">
            <span className="text-7xl font-bold">
              Descubre y adquiere celulares de ultima generación
            </span>
            <span className="">
              Te ofrecemos un excelente servicio a la mejor calidad/precio
            </span>
            <Button
              colorScheme="teal"
              size={"md"}
              width={"150px"}
            >
              Cuentame más
            </Button>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <img
              src="./images/undraw_mobile_app.svg"
              alt="mobile"
              className="w-4/5 h-4/5"
            />
          </div>
        </div>
        <div>
          <span className="font-bold uppercase text-xl">Asociado con</span>
          <Card>
            <CardBody className="flex gap-4 justify-between items-center py-4 px-2 rounded-xl">
              <span>Interdominios</span>
              <span>Argored</span>
              <span>Nerion networks</span>
              <span>digival.es</span>
            </CardBody>
          </Card>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex justify-center items-center w-full h-full">
            <img
              src="./images/mobile_info.png"
              alt="mobile info"
              className="w-4/5 h-4/5"
            />
          </div>
          <div className="flex flex-col">
            <span className="uppercase text-xs">Ventas</span>
            <span className="capitalize font-bold text-4xl">
              Compra Lo ultimo en celulares
            </span>
            <p className="text-xl">
              Te ofrecemos un excelente servicio a la mejor calidad/precio
            </p>
            <Button
              colorScheme="teal"
              variant={"outline"}
              w={"150px"}
            >
              Ir a la tienda
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-4">
            <span className="uppercase text-base">Nosotros</span>
            <span className="capitalize text-5xl font-bold">
              Somos una empresa que le da un excelente servicio a sus cliente
            </span>
            <p className="text-xl">
              Garantizamos que tu compra sea satisfactoria{" "}
            </p>
            <Button
              colorScheme="teal"
              variant={"outline"}
            >
              Ubicanos
            </Button>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <img
              src="./images/mobiles_show.png"
              alt="mobiles show"
            />
          </div>
        </div>
        <div className="flex flex-col mb-4 justify-center items-center gap-4">
          <span className="text-base font-semibold">Testimonios</span>
          <span className="text-3xl font-bold">
            Lee lo que otros tienen para decir
          </span>
          <div className="flex gap-6">
            <Card className="text-left">
              <CardHeader>
                <Heading size="md">Client Report</Heading>
              </CardHeader>
              <CardBody>
                <Stack
                  divider={<StackDivider />}
                  spacing={"4"}
                >
                  <Box>
                    <Heading
                      size={"xs"}
                      textTransform={"uppercase"}
                    >
                      Summary
                    </Heading>
                    <Text
                      pt="2"
                      fontSize={"sm"}
                    >
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
                <Stack
                  divider={<StackDivider />}
                  spacing={"4"}
                >
                  <Box>
                    <Heading
                      size={"xs"}
                      textTransform={"uppercase"}
                    >
                      Summary
                    </Heading>
                    <Text
                      pt="2"
                      fontSize={"sm"}
                    >
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
                <Stack
                  divider={<StackDivider />}
                  spacing={"4"}
                >
                  <Box>
                    <Heading
                      size={"xs"}
                      textTransform={"uppercase"}
                    >
                      Summary
                    </Heading>
                    <Text
                      pt="2"
                      fontSize={"sm"}
                    >
                      View a summary of all your clients over the last month.
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </div>
        </div>

        <Card className="flex flex-col gap-4 justify-center items-center font-bold py-4">
          <span className="uppercase">¿Estas listo?</span>
          <p className="uppercase text-3xl text-center w-1/3">
            Se parte de nuestra gran familia y adquiere tu dispositivo movil
          </p>
          <Button
            colorScheme="teal"
            variant={"ghost"}
            className="uppercase"
          >
            Comienza Ahora
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Home;
