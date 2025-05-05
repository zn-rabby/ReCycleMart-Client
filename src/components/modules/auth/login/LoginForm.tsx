"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "@/services/AuthService";
import { toast } from "sonner";
import { loginSchema } from "./loginValidation";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  // const searchParams = useSearchParams();
  // const redirect = searchParams.get("redirectPath");
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    formState: { isSubmitting },
    setValue,
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      if (res?.success) {
        toast.success(res?.message);
        localStorage.setItem("shouldReload", "true");
        router.push("/");
      } else {
        toast.error(res?.message);
      }
    } catch (err: unknown) {
      console.error(err);
    }
  };

  // function to prefill the form for "User"
  const handleUserButtonClick = () => {
    setValue("email", "abc@gmail.com");
    setValue("password", "securePassword123");
  };

  // function to prefill the form for "Admin"
  const handleAdminButtonClick = () => {
    setValue("email", "admin@gmail.com");
    setValue("password", "securePassword123");
  };

  return (
    <div className="w-full p-4">
      {/* Logo and Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Login</h2>
        <p className="text-gray-700 mt-2 font-semibold">
          Access your ReCycleMart account
        </p>
      </div>

      {/* Login Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div className="flex justify-evenly ">
            <Button
              type="submit"
              onClick={handleUserButtonClick}
              variant="outline"
              className="border-[#FF965A] text-[#FF965A] hover:bg-blue-50 hover:text-[#FF965A] cursor-pointer"
            >
              User Demo
            </Button>

            <Button
              type="submit"
              onClick={handleAdminButtonClick}
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-50 hover:text-orange-600 cursor-pointer"
            >
              Admin Demo
            </Button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    {...field}
                    // value={field.value || ""}
                    className="focus:ring-[#FF5E01] focus:border-[#FF5E01]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    {...field}
                    // value={field.value || ""}
                    className="focus:ring-[#FF5E01] focus:border-[#FF5E01]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full bg-[#FF5E01] hover:bg-[#D94F01] text-white py-3 rounded-lg transition-colors duration-300 cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Form>

      {/* Register Link */}
      <p className="text-sm text-gray-700 text-center mt-6">
        Don{"'"}t have an account?{" "}
        <Link
          href="/register"
          className="text-[#FF5E01] hover:underline font-bold"
        >
          Register
        </Link>
      </p>
    </div>
  );
}
