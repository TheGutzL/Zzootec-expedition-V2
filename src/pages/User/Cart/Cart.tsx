import { useCartStore } from "@/store/cart";
import { ActionIcon, Button, Divider, Paper } from "@mantine/core";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const { cart, removeFromCart } = useCartStore();

  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="container mx-auto">
      <div className="max-w-2xl p-4 mx-auto">
        <span className="mb-4 font-bold text-3xl">Tu Carrito de Compras</span>
        <Paper
          withBorder
          shadow="md"
          p="md"
          radius="md"
          className="mb-4"
        >
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center py-2"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12"
                />
                <span>{item.name}</span>
              </div>
              <span>Cantidad: {item.quantity}</span>
              <span>S/.{item.price.toFixed(2)}</span>
              <ActionIcon
                variant="filled"
                aria-label="Eliminar"
                color="red"
                size="md"
                radius="xl"
                onClick={() => removeFromCart(item.id)}
              >
                <Trash2 className="w-2/3 h-2/3" />
              </ActionIcon>
            </div>
          ))}
          <Divider className="my-4" />
          <div className="flex justify-between">
            <span className="font-bold">Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </Paper>
        <div>
          <Button color="green">Proceder al Pago</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
