import CardProduct from "@/components/CardProduct/CardProduct";
import "@mantine/carousel/styles.css";
import Select from "react-select";

const Store = () => {

  

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 py-4">
      <div className="bg-gray-100 col-span-1 rounded-xl p-4 shadow-lg">
        <span className="text-xl font-bold">Filtros</span>
        <div className="flex flex-col mt-4">
          {/* Aquí puedes agregar los filtros */}
        </div>
      </div>
      <div className="bg-gray-200 col-span-1 md:col-span-3 p-4 rounded-xl shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold">Catalogo</span>
            <span className="text-xs">
              Mostrando los 6 resultados encontrados
            </span>
          </div>
          <Select
            options={options}
            className="w-1/3"
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </div>
  );
};

export default Store;
