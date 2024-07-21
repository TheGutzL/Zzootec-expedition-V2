import { Button } from "@mantine/core";
import { CircleCheck } from "lucide-react";

const PaymentSuccess = () => {
  return (
    <div className="container mx-auto flex justify-center items-center pt-24">
      <div className="max-w-sm flex flex-col items-center justify-center shadow-lg rounded-lg p-4 gap-4">
        <CircleCheck className="w-24 h-24 text-green-500" />
        <span className="font-bold text-xl">Éxito del pedido</span>
        <p className="text-center">
          Gracias por elegir nuestra tienda. Apreciamos su pedido
        </p>
        <span className="text-xl">¡Que tenga un buen día!</span>
        <Button>Ir al inicio</Button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
