import { ProductSchemaInfer } from "@/models/product";
import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CardProductProps {
  product: ProductSchemaInfer;
}

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const CardProduct = ({ product }: CardProductProps) => {
  const navigate = useNavigate();

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
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover sm:h-56 md:h-64 lg:h-72"
          fit="cover"
        />
      </Card.Section>

      <Group
        justify="space-between"
        mt="md"
        mb="xs"
        className="flex flex-col sm:flex-row"
      >
        <Text
          fw={500}
          className="text-gray-800 capitalize"
        >
          {product.name}
        </Text>
        <Badge
          color="pink"
          className="bg-pink-500 text-white self-start sm:self-auto"
        >
          {product.category.name}
        </Badge>
      </Group>

      <span className="text-gray-600 font-semibold text-sm">
        {capitalizeFirstLetter(product.description)}
      </span>

      <Button
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        className="mt-4 bg-blue-500 text-white hover:bg-blue-600"
        leftSection={<Search />}
        onClick={() => navigate(`/product/${product.id}`)}
      >
        Ver Producto
      </Button>
    </Card>
  );
};

export default CardProduct;
