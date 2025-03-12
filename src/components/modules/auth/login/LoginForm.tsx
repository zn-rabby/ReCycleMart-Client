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
import Logo from "@/assets/svgs/Logo";
import { loginSchema } from "./loginValidation";

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (err: unknown) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-8">
      {/* Logo and Heading */}
      <div className="flex flex-col items-center mb-8">
        <Logo />
        <h1 className="text-3xl font-bold text-gray-800 mt-4">Welcome Back!</h1>
        <p className="text-gray-600">Login to your ReCycleMart account</p>
      </div>

      {/* Login Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
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
                    value={field.value || ""}
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
                    value={field.value || ""}
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
            className="w-full bg-[#FF5E01] hover:bg-[#D94F01] text-white py-3 rounded-lg transition-colors duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Form>

      {/* Register Link */}
      <p className="text-sm text-gray-600 text-center mt-6">
        Don't have an account?{" "}
        <Link href="/register" className="text-[#FF5E01] hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}