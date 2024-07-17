import { registerSchema } from "@/models/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const Signup = () => {
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
  };

  return (
    <div className="container">
      <div className="rounded-xl bg-gray-300 p-4 my-4 w-1/3 mx-auto shadow-xl">
        <span className="font-bold text-xl">Registrese</span>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <button
            type="submit"
            className="w-full"
          >
            Registrarse
          </button>
        </form>
        <div className="mt-4">
          <span className="text-xs font-semibold">
            ¿No tienes una cuenta? <Link to="signup">Registrate</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
