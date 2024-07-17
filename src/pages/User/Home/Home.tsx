import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";

const Home = () => {
  return (
    <section className="bg-gray-100 py-8">
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
            <Button variant="filled">Ver más</Button>
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
            <Button className="">Cuentame más</Button>
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
            <Button>Ir a la tienda</Button>
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
            <Button>Ubicanos</Button>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <img
              src="./images/mobiles_show.png"
              alt="mobiles show"
            />
          </div>
        </div>

        <section className="flex flex-col mb-4 justify-center items-center gap-4">
          <span className="text-base font-semibold">Testimonios</span>
          <span className="text-3xl font-bold capitalize">
            Lee lo que otros tienen para decir
          </span>
          <div className="flex gap-8">
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
            >
              <Card.Section>
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  alt="Norway"
                  className="w-full h-full object-cover"
                />
              </Card.Section>

              <Group
                justify="space-between"
                mt="md"
                mb="xs"
              >
                <Text fw={500}>Norway</Text>
                <Badge color="pink">On sale</Badge>
              </Group>

              <Text
                size="sm"
                c="dimmed"
              >
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              <Button
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                Book classic tour now
              </Button>
            </Card>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
            >
              <Card.Section>
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  alt="Norway"
                  className="w-full max-h-60 object-cover"
                />
              </Card.Section>

              <Group
                justify="space-between"
                mt="md"
                mb="xs"
              >
                <Text fw={500}>Norway</Text>
                <Badge color="pink">On sale</Badge>
              </Group>

              <Text
                size="sm"
                c="dimmed"
              >
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              <Button
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                Book classic tour now
              </Button>
            </Card>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
            >
              <Card.Section>
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  alt="Norway"
                  className="w-full max-h-60 object-cover"
                />
              </Card.Section>

              <Group
                justify="space-between"
                mt="md"
                mb="xs"
              >
                <Text fw={500}>Norway</Text>
                <Badge color="pink">On sale</Badge>
              </Group>

              <Text
                size="sm"
                c="dimmed"
              >
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              <Button
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                Book classic tour now
              </Button>
            </Card>
          </div>
        </section>

        <div className="flex flex-col gap-4 justify-center items-center font-bold py-4 bg-white rounded-xl drop-shadow-xl">
          <span className="uppercase">¿Estas listo?</span>
          <p className="uppercase text-3xl text-center w-1/3">
            Se parte de nuestra gran familia y adquiere tu dispositivo movil
          </p>
          <Button>Comienza Ahora</Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
