import { getAllProductsPaginated } from "@/api/products";
import { ActionIcon, Pagination, Table } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { Edit, Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ProductPanel = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const {
    data: products,
    isSuccess,
    isError,
    isPending,
    error,
  } = useQuery({
    queryKey: ["productsPanel", currentPage, pageSize],
    queryFn: async () =>
      getAllProductsPaginated(currentPage - 1, pageSize, "name,asc"),
  });

  useEffect(() => {
    if (isSuccess && products) {
      setTotalPages(products.page.totalPages);
    }
  }, [isSuccess, isError, products]);

  if (isError) {
    toast.error("Error al cargar los productos");
    return <div>Error al cargar los productos {error.message}</div>;
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
              <Table.Th>Categoria</Table.Th>
              <Table.Th>Acciones</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {products._embedded.productResponseList.map((product) => (
              <Table.Tr key={product.id}>
                <Table.Td>{product.id}</Table.Td>

                <Table.Td className="flex items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded-md"
                  />
                  <span className="capitalize">{product.name}</span>
                </Table.Td>
                <Table.Td>{product.category.name}</Table.Td>
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
                    onClick={() => navigate(`/admin/products/${product.id}`)}
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

export default ProductPanel;
