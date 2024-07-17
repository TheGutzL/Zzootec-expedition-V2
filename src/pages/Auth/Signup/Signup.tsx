import { Button, PasswordInput } from "@/components";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { registerSchema } from "@/models/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const Signup = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    console.log(values);
    toast({
      title: "Registrado con exito",
      action: <ToastAction altText="try again">Try again</ToastAction>,
    });
  };

  return (
    <div className="container">
      <div className="rounded-xl bg-gray-300 p-4 my-4 w-1/3 mx-auto shadow-xl">
        <span className="font-bold text-xl">Registrese</span>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombres</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Jhon"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Ingrese sus nombres</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apellidos</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Jhon"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Ingrese sus apellidos</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="johndoe@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Ingrese su email</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="johnDoe"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Ingrese su nombre de usuario
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      placeholder="*****"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Ingrese su contraseña</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant="secondary"
              className="w-full"
            >
              Registrarse
            </Button>
          </form>
          <div className="mt-4">
            <span className="text-xs font-semibold">
              ¿No tienes una cuenta? <Link to="signup">Registrate</Link>
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
