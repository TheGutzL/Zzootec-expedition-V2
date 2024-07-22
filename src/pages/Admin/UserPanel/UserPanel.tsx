import { getAllUsersPaginated } from "@/api/users";
import { ActionIcon, Pagination, Table } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { Edit, Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const UserPanel = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const {
    data: users,
    isSuccess,
    isError,
    isPending,
    error,
  } = useQuery({
    queryKey: ["usersPanel", currentPage, pageSize],
    queryFn: async () =>
      getAllUsersPaginated(currentPage - 1, pageSize, "username"),
  });

  useEffect(() => {
    if (isSuccess && users) {
      setTotalPages(users.page.totalPages);
    }
  }, [isSuccess, isError, users]);

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
              <Table.Th>Username</Table.Th>
              <Table.Th>Acciones</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {users._embedded.userResponseList.map((user) => (
              <Table.Tr key={user.id}>
                <Table.Td>{user.id}</Table.Td>
                <Table.Td>{user.username}</Table.Td>
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
                    onClick={() => navigate(`/admin/users/${user.id}`)}
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

export default UserPanel;
