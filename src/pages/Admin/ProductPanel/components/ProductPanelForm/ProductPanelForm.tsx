import { getAllCategories } from "@/api/categories";
import { getProductById, updateProduct } from "@/api/products";
import { ProductRequestSchemaInfer } from "@/models/product";
import { DevTool } from "@hookform/devtools";
import { Button, TextInput } from "@mantine/core";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { toast } from "sonner";

const ProductPanelForm = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProductRequestSchemaInfer>();

  const { data: categories } = useQuery({
    queryKey: ["categoriesPanelForm"],
    queryFn: async () => getAllCategories(),
  });

  const categoryOptions = categories?.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  const { data: product } = useQuery({
    queryKey: ["productPanelForm"],
    queryFn: async () => await getProductById(Number(id)),
    enabled: !!id,
  });

  useEffect(() => {
    if (product) {
      setValue("name", product.name);
      setValue("image", product.image);
      setValue("description", product.description);
      setValue("price", product.price);
      setValue("quantity", product.quantity);
      setValue("categoryId", product.category.id);
    }
  }, [product, setValue]);

  const mutation = useMutation({
    mutationFn: async (product: ProductRequestSchemaInfer) =>
      await updateProduct(Number(id), product),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["productPanelForm"] });
    },
    onSuccess: () => {
      toast.success("Producto actualizado exitosamente");
    },
    onError: () => {
      toast.error("Error al actualizar el producto");
    },
  });

  const onSubmit: SubmitHandler<ProductRequestSchemaInfer> = (data) => {
    mutation.mutate(data);
  };

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
          <div className="mt-4">
            <span>Vista previa de la imagen:</span>
            <img
              src={product?.image}
              alt="Vista previa de la imagen"
              className="mt-2 max-w-xs max-h-60"
            />
          </div>
          <TextInput
            label="Descripción"
            placeholder="Descripción"
            {...register("description")}
          />

          <div>
            <span>Precio</span>
            <input
              type="number"
              placeholder="Precio"
              className="w-full px-4 py-2 mt-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              {...register("price", { valueAsNumber: true })}
            />
            {errors.price && <span>{errors.price.message}</span>}
          </div>
          <div>
            <span>Cantidad</span>
            <input
              type="number"
              placeholder="Cantidad"
              className="w-full px-4 py-2 mt-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              {...register("quantity", { valueAsNumber: true })}
            />
            {errors.price && <span>{errors.quantity?.message}</span>}
          </div>
          <Controller
            control={control}
            name="categoryId"
            render={({ field }) => (
              <Select
                {...field}
                options={categoryOptions}
                value={categoryOptions?.find(
                  (option) => option.value === field.value
                )}
                onChange={(option) => field.onChange(option?.value)}
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
