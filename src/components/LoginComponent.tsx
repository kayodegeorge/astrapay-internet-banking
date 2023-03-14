import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const validationSchema = z.object({
  username: z.string().min(3, { message: "Username is required" }).nonempty(),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  console.log(errors);

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => console.log(data);

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Username"
          className={`rounded-lg border-2 py-3 px-2 ${
            errors.username ? "border-red-500" : "border-astra-blue"
          } focus:outline-astra-orange`}
          type="text"
          id="username"
          {...register("username")}
        />
        {errors.username ? (
          <p className="mt-2 text-xs italic text-red-500">
            {errors.username?.message}
          </p>
        ) : null}

        <input
          placeholder="Password"
          className={`mt-4 rounded-lg border-2 py-3 px-2 ${
            errors.username ? "border-red-500" : "border-astra-blue"
          } focus:outline-astra-orange`}
          type="password"
          {...register("password")}
          id="password"
        />
        {errors.password ? (
          <p className="mt-2 text-xs italic text-red-500">
            {errors.password?.message}
          </p>
        ) : null}

        <div className="mt-3 flex justify-end">
          <p className="">
            Forgot{" "}
            <Link className="text-astra-blue" href={"/forgot-username"}>
              Username
            </Link>{" "}
            or{" "}
            <Link
              className="text-astra-blue"
              href={"/register/forgot-password"}
            >
              Password?
            </Link>
          </p>
        </div>

        <button
          className="mt-4 rounded-lg bg-astra-blue py-3 px-2 font-bold text-white hover:bg-astra-orange"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
