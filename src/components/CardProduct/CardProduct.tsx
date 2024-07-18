import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";

const CardProduct = () => {
  return (
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
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
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
  );
};

export default CardProduct;
