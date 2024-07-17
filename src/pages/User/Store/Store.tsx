import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";

const Store = () => {
  return (
    <div className="container mx-auto grid grid-cols-4 gap-4 py-4">
      <div className="bg-gray-100 col-span-1 rounded-xl p-4">
        <span className="text-xl font-bold">Filtros</span>
        <div className="flex flex-col">

        </div>
      </div>
      <div className="bg-gray-200 col-span-3 p-4 rounded-xl">
        <span className="text-xl font-bold">Productos</span>
        <Carousel
          withIndicators
          height={500}
          slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
          slideGap={{ base: 0, sm: "md" }}
          loop
          align="start"
        >
          <Carousel.Slide>
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
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  );
};

export default Store;
