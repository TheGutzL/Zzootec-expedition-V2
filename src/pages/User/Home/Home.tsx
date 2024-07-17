import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";

const Home = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-4">
          <div className="flex justify-center items-center">
            <img
              src="./images/undraw_modern_design.svg"
              alt="Phone"
              className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
            />
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-4xl font-bold text-gray-800">
              Productos de calidad para tu celular
            </span>
            <p className="text-xl md:text-2xl text-gray-600">
              La mejor opción en cuanto a tecnología en todo el mercado y al
              alcance de tu mano
            </p>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
              Ver más
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          <div className="flex flex-col gap-6">
            <span className="text-4xl lg:text-6xl font-bold text-gray-800">
              Descubre y adquiere celulares de última generación
            </span>
            <span className="text-lg text-gray-600">
              Te ofrecemos un excelente servicio a la mejor calidad/precio
            </span>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
              Cuéntame más
            </button>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="./images/undraw_mobile_app.svg"
              alt="mobile"
              className="max-w-xs sm:max-w-sm md:max-w-md lg:w-4/5 lg:h-4/5"
            />
          </div>
        </div>

        <div className="py-8 px-4">
          <div>
            <span className="font-bold uppercase text-xl text-gray-800">
              Asociado con
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="flex justify-center items-center w-full h-full">
              <img
                src="./images/mobile_info.png"
                alt="mobile info"
                className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mx-auto"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="uppercase text-sm md:text-base font-semibold text-gray-600">
                Ventas
              </span>
              <span className="capitalize font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800">
                Compra lo último en celulares
              </span>
              <p className="text-md md:text-lg lg:text-xl text-gray-600">
                Te ofrecemos un excelente servicio a la mejor calidad/precio
              </p>
              <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200 ease-in-out">
                Ir a la tienda
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mb-4">
          <div className="flex flex-col gap-4">
            <span className="uppercase text-lg md:text-xl font-semibold text-gray-700">
              Nosotros
            </span>
            <span className="capitalize text-3xl md:text-5xl font-bold text-gray-800">
              Somos una empresa que le da un excelente servicio a sus clientes
            </span>
            <p className="text-lg md:text-xl text-gray-600">
              Garantizamos que tu compra sea satisfactoria
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition duration-300">
              Ubícanos
            </button>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <img
              className="max-w-full h-auto rounded-lg shadow-lg px-4"
              src="./images/mobiles_show.png"
              alt="mobiles show"
            />
          </div>
        </div>

        <section className="flex flex-col mb-8 justify-center items-center gap-8 py-8">
          <span className="text-lg font-semibold text-gray-700">
            Testimonios
          </span>
          <span className="text-4xl font-bold text-gray-800 capitalize">
            Lee lo que otros tienen para decir
          </span>
          <div className="flex justify-center gap-8">
            <Card
              shadow="md"
              padding="lg"
              radius="lg"
              withBorder
              className="w-full md:w-1/3 bg-white"
            >
              <Card.Section>
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  alt="Norway"
                  className="w-full h-60 object-cover"
                />
              </Card.Section>

              <Group
                justify="space-between"
                className="mt-4 mb-2"
              >
                <Text className="font-semibold">Norway</Text>
                <Badge
                  color="pink"
                  className="bg-pink-200 text-pink-800"
                >
                  On sale
                </Badge>
              </Group>

              <Text
                size="sm"
                className="text-gray-600"
              >
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              <Button
                color="blue"
                className="mt-4 bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Book classic tour now
              </Button>
            </Card>
            <Card
              shadow="md"
              padding="lg"
              radius="lg"
              withBorder
              className="w-full md:w-1/3 bg-white"
            >
              <Card.Section>
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  alt="Norway"
                  className="w-full h-60 object-cover"
                />
              </Card.Section>

              <Group
                justify="space-between"
                className="mt-4 mb-2"
              >
                <Text className="font-semibold">Norway</Text>
                <Badge
                  color="pink"
                  className="bg-pink-200 text-pink-800"
                >
                  On sale
                </Badge>
              </Group>

              <Text
                size="sm"
                className="text-gray-600"
              >
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              <Button
                color="blue"
                className="mt-4 bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Book classic tour now
              </Button>
            </Card>
            <Card
              shadow="md"
              padding="lg"
              radius="lg"
              withBorder
              className="w-full md:w-1/3 bg-white"
            >
              <Card.Section>
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  alt="Norway"
                  className="w-full h-60 object-cover"
                />
              </Card.Section>

              <Group
                justify="space-between"
                className="mt-4 mb-2"
              >
                <Text className="font-semibold">Norway</Text>
                <Badge
                  color="pink"
                  className="bg-pink-200 text-pink-800"
                >
                  On sale
                </Badge>
              </Group>

              <Text
                size="sm"
                className="text-gray-600"
              >
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              <Button
                color="blue"
                className="mt-4 bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 transition duration-300"
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
