import { getAllPaginatedOrders } from "@/api/order";
import { ActionIcon, Pagination, Table } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { Edit, Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const OrderPanel = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const {
    data: orders,
    isSuccess,
    isError,
    isPending,
    error,
  } = useQuery({
    queryKey: ["ordersPanel", currentPage, pageSize],
    queryFn: async () =>
      getAllPaginatedOrders(currentPage - 1, pageSize, "total"),
  });

  useEffect(() => {
    if (isSuccess && orders) {
      setTotalPages(orders?.page?.totalPages);
    }
  }, [isSuccess, isError, orders]);

  if (isError) {
    toast.error("Error al cargar los ordenes");
    return <div>Error al cargar los ordenes {error.message}</div>;
  }

  if (isPending) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mx-auto py-4">
      <div className="bg-white rounded-md drop-shadow p-4">
        <span className="text-3xl font-bold">Productos</span>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Id</Table.Th>
              <Table.Th>Nombre</Table.Th>
              <Table.Th>Total</Table.Th>
              <Table.Th>Acciones</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {orders._embedded.orderResponseList.map((order) => (
              <Table.Tr key={order.orderId}>
                <Table.Td>{order.orderId}</Table.Td>
                <Table.Td>{order.user.username}</Table.Td>
                <Table.Td>S/.{order.total}</Table.Td>
                <Table.Td className="flex gap-4">
                  <ActionIcon
                    variant="filled"
                    color="red"
                    size="md"
                  >
                    <Trash2Icon className="w-[70%] h-[70%] stroke-[1.5]" />
                  </ActionIcon>
                  <ActionIcon
                    variant="filled"
                    color="blue"
                    size="md"
                    onClick={() => navigate(`/admin/orders/${order.orderId}`)}
                  >
                    <Edit className="w-[70%] h-[70%] stroke-[1.5]" />
                  </ActionIcon>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>

        <Pagination
          total={totalPages}
          value={currentPage}
          onChange={setCurrentPage}
          siblings={2}
          mt="sm"
          withEdges
          getControlProps={(control) => {
            if (control === "first") {
              return {
                component: Link,
              };
            }

            if (control === "last") {
              return {
                component: Link,
              };
            }

            if (control === "next") {
              return {
                component: Link,
              };
            }

            if (control === "previous") {
              return {
                component: Link,
              };
            }

            return {};
          }}
        />
      </div>
    </div>
  );
};

export default OrderPanel;
