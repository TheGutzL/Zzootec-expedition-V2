import { ProductRequestSchemaInfer } from "@/models/product";
import { DevTool } from "@hookform/devtools";
import { Button, TextInput } from "@mantine/core";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Select from "react-select";

const ProductPanelForm = () => {
  const { id } = useParams();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductRequestSchemaInfer>();

  const onSubmit = async () => {};

  const options = [
    { value: 1, label: "Chocolate" },
    { value: 2, label: "Strawberry" },
    { value: 3, label: "Vanilla" },
  ];

  return (
    <div className="container mx-auto py-4">
      <div className="shadow rounded-md p-4 bg-white">
        <span>{id ? "Editar Producto" : "Crear Producto"}</span>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <TextInput
            label="Nombre"
            placeholder="Nombre"
            {...register("name")}
          />
          <TextInput
            label="Imagen"
            placeholder="URL de la imagen"
            {...register("image")}
          />
          <TextInput
            label="Descripción"
            placeholder="Descripción"
            {...register("description")}
          />
          <input
            type="number"
            placeholder="Precio"
            className="w-full px-4 py-2 mt-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            {...register("price", { valueAsNumber: true })}
          />
          {errors.price && <span>Este campo es requerido</span>}
          <input
            type="number"
            placeholder="Cantidad"
            className="w-full px-4 py-2 mt-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            {...register("quantity", { valueAsNumber: true })}
          />
          <Controller
            control={control}
            name="categoryId"
            render={({ field: { onChange } }) => (
              <Select
                onChange={(val) => onChange(val?.value)}
                options={options}
              />
            )}
          />
          <Button type="submit">{id ? "Editar" : "Crear"}</Button>
        </form>
      </div>

      <DevTool control={control} />
    </div>
  );
};

export default ProductPanelForm;
