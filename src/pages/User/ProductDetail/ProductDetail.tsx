import { getProductById } from "@/api/products";
import { CartItemSchema } from "@/models/cartItem";
import { useCartStore } from "@/store/cart";
import { Button, Divider, Image, Paper } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { ShoppingCart } from "lucide-react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const ProductDetail = () => {
  const { cart, addToCart } = useCartStore();
  const { id } = useParams();

  const {
    data: product,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => getProductById(Number(id)),
  });
  const handleAddToCart = () => {
    const isProductInCart = cart.some((item) => item.id === product?.id);

    if (isProductInCart) {
      toast.error("Producto ya se encuentra en el carrito");
      return;
    }

    const cartItem = CartItemSchema.parse({ ...product, desiredQuantity: 1 });
    addToCart(cartItem);
    toast.success("Producto agregado al carrito");
  };

  if (isLoading) return <div>Cargando...</div>;
  if (isError) return <div>Error al cargar</div>;

  return (
    <div className="container mx-auto">
      <div className="max-w-4xl p-4 mx-auto">
        <Paper
          withBorder
          shadow="md"
          p="md"
          radius="md"
        >
          <div className="flex flex-col md:flex-row">
            <Image
              src={product?.image}
              alt={product?.name}
              className="max-w-sm"
            />
            <div className="flex flex-col md:ml-4">
              <span className="text-3xl font-bold">{product?.name}</span>
              <span className="my-4 text-sm">{product?.description}</span>
              <Divider className="my-4" />
              <span className="mb-4">Precio: ${product?.price.toFixed(2)}</span>
              <Button
                leftSection={<ShoppingCart />}
                color="green"
                onClick={handleAddToCart}
              >
                Agregar al Carrito
              </Button>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default ProductDetail;
