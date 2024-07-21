import { getOrdersByUserId } from "@/api/order";
import { useAuthStore } from "@/store";
import { ActionIcon, Badge, Table } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { Search, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const {
    data: orders,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["orders", user?.id],
    queryFn: async () => getOrdersByUserId(user?.id as number),
  });

  if (isLoading) return <div>Cargando órdenes...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const handleDelete = () => {
    return () => {};
  };

  const handleSee = (id: number) => {
    navigate(`/orders/${id}`);
  };

  return (
    <div className="container mx-auto py-4">
      <div className="mx-auto max-w-4xl shadow p-4">
        <h2 className="text-3xl font-bold">Ordenes</h2>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Direccion</Table.Th>
              <Table.Th>Total</Table.Th>
              <Table.Th>Acciones</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {orders?.map((order) => (
              <Table.Tr key={order.orderId}>
                <Table.Td>{order.orderId}</Table.Td>
                <Table.Td>
                  <Badge color="blue">{order.status}</Badge>
                </Table.Td>
                <Table.Td>{order.shippingAddress.street}</Table.Td>
                <Table.Td>S/.{order.total}</Table.Td>
                <Table.Td className="flex gap-4">
                  <ActionIcon
                    variant="filled"
                    aria-label="Delete"
                    color="red"
                    onClick={handleDelete()}
                  >
                    <Trash2 className="stroke-[1.5] w-[70%] h-[70%]" />
                  </ActionIcon>
                  <ActionIcon
                    variant="filled"
                    aria-label="See"
                    color="blue"
                    onClick={() => handleSee(order.orderId)}
                  >
                    <Search className="stroke-[1.5] w-[70%] h-[70%]" />
                  </ActionIcon>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>
    </div>
  );
};

export default Order;
