import { getDetailOrderById } from "@/api/order";
import { Table } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const OrderDetail = () => {
  const { id } = useParams();

  const {
    data: detailOrder,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["order", id],
    queryFn: async () => getDetailOrderById(Number(id)),
  });

  const total = detailOrder?.reduce((acc, item) => acc + item.subtotal, 0);

  if (isLoading) return <div>Cargando detalles de la orden...</div>;
  if (isError)
    return <div>Error al cargar los detalles de la orden: {error.message}</div>;

  return (
    <div className="container mx-auto py-4">
      <div className="mx-auto max-w-4xl shadow p-4">
        <h2>Detalle de la Orden#{id}</h2>
        <Table
          striped
          withTableBorder
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Producto</Table.Th>
              <Table.Th>Cantidad</Table.Th>
              <Table.Th>Subtotal</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {detailOrder?.map((detail) => (
              <Table.Tr>
                <Table.Td className="flex items-center gap-4">
                  <img
                    src={detail.product.image}
                    alt=""
                    className="w-12 h-12"
                  />
                  <span>{detail.product?.name}</span>
                </Table.Td>
                <Table.Td>{detail.quantity}</Table.Td>
                <Table.Td>S/.{detail.subtotal}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
          <Table.Tfoot>
            <Table.Tr>
              <Table.Th  colSpan={3}>Total: S/.{total}</Table.Th>
            </Table.Tr>
          </Table.Tfoot>
        </Table>
      </div>
    </div>
  );
};

export default OrderDetail;
