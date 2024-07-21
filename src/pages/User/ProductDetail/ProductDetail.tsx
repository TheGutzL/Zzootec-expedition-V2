import { getProductById } from "@/api/products";
import { ProductSchemaInfer } from "@/models/product";
import { useCartStore } from "@/store/cart";
import { Button, Divider, Image, Paper } from "@mantine/core";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const ProductDetail = () => {
  const { addToCart } = useCartStore();
  const { productId } = useParams();
  const [product, setProduct] = useState<ProductSchemaInfer | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (productId) {
        try {
          const response = await getProductById(Number(productId));
          setProduct(response.data);
        } catch (error) {
          toast.error("Ocurrió un error al cargar el producto");
        }
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      const cartItem = { ...product, desiredQuantity: 1 };
      addToCart(cartItem);
      toast.success("Producto agregado al carrito");
    }
  };

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
