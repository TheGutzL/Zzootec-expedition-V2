import { getAllProductsPaginated } from "@/api/products";
import CardProduct from "@/components/CardProduct/CardProduct";
import { ProductSchemaInfer } from "@/models/product";
import "@mantine/carousel/styles.css";
import { Pagination } from "@mantine/core";
import { usePagination } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { toast } from "sonner";

const Store = () => {
  const [products, setProducts] = useState<ProductSchemaInfer[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize] = useState(9);

  const pagination = usePagination({
    total: totalPages,
    initialPage: 1,
    siblings: 2,
    onChange: (page) => setCurrentPage(page),
  });

  const [currentPage, setCurrentPage] = useState(pagination.active);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await getAllProductsPaginated(
          currentPage - 1,
          pageSize,
          "name,asc"
        );
        setProducts(response.data.content);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        toast.error("Error al cargar los productos");
      }
    };
    loadProducts();
  }, [currentPage, pageSize]);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 gap-4 py-4">
      {/* <div className="bg-gray-100 col-span-1 rounded-xl p-4 shadow-lg">
        <span className="text-xl font-bold">Filtros</span>
        <div className="flex flex-col mt-4"></div>
      </div> */}
      <div className="bg-gray-200 col-span-1 md:col-span-3 p-4 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold">Catalogo</span>
            <span className="text-xs">
              Mostrando {products.length} resultados encontrados
            </span>
          </div>
          <Select
            options={options}
            className="w-1/3"
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <CardProduct
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <Pagination
          total={totalPages}
          value={currentPage}
          onChange={setCurrentPage}
          siblings={2}
          mt="sm"
          withEdges
          getControlProps={(control) => {
            if (control === "first") {
              return { component: Link, href: "/store" };
            }

            if (control === "last") {
              return { component: Link, href: `#page-${totalPages}` };
            }

            if (control === "next") {
              return { component: Link, href: `#page-${currentPage + 1}` };
            }

            if (control === "previous") {
              return { component: Link, href: `#page-${currentPage - 1}` };
            }

            return {};
          }}
        />
      </div>
    </div>
  );
};

export default Store;
