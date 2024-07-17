import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import Select from "react-select";

const Store = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 py-4">
      <div className="bg-gray-100 col-span-1 rounded-xl p-4 shadow-lg">
        <span className="text-xl font-bold">Filtros</span>
        <div className="flex flex-col mt-4">
          {/* Aquí puedes agregar los filtros */}
        </div>
      </div>
      <div className="bg-gray-200 col-span-1 md:col-span-3 p-4 rounded-xl shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold">Catalogo</span>
            <span className="text-xs">
              Mostrando los 6 resultados encontrados
            </span>
          </div>
          <Select
            options={options}
            className="w-1/3"
          />
        </div>

        <Carousel
          withIndicators
          height={500}
          slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
          slideGap={{ base: 0, sm: "md" }}
          loop
          align="start"
          className="mt-4"
        >
          {/* Ejemplo de un Slide */}
          <Carousel.Slide>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="bg-white"
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
                <Text
                  fw={500}
                  className="text-gray-800"
                >
                  Norway
                </Text>
                <Badge
                  color="pink"
                  className="bg-pink-500 text-white"
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
                fullWidth
                mt="md"
                radius="md"
                className="mt-4 bg-blue-500 text-white hover:bg-blue-600"
              >
                Book classic tour now
              </Button>
            </Card>
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  );
};

export default Store;
