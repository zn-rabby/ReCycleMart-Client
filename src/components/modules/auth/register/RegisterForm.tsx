/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { registrationSchema } from "./registerValidation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { registerUser } from "@/services/AuthService";

export default function RegisterForm() {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const password = form.watch("password");
  const passwordConfirm = form.watch("passwordConfirm");

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data, "data");
    try {
      const res = await registerUser(data);
      if (res?.success) {
        toast.success(res?.message);
        router.push("/login");
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="w-full p-4 ">
      {/* Logo and Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Register</h2>
        <p className="text-gray-700 mt-2 font-semibold">
          Create Your ReCycleMart Account
        </p>
      </div>

      {/* Registration Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value || ""}
                    className="focus:ring-[#FF5E01] focus:border-[#FF5E01]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Number Field */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Phone Number</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value || ""}
                    className="focus:ring-[#FF5E01] focus:border-[#FF5E01]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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

          {/* Confirm Password Field */}
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    {...field}
                    value={field.value || ""}
                    className="focus:ring-[#FF5E01] focus:border-[#FF5E01]"
                  />
                </FormControl>
                {passwordConfirm && password !== passwordConfirm ? (
                  <FormMessage>Password does not match</FormMessage>
                ) : (
                  <FormMessage />
                )}
              </FormItem>
            )}
          />

          {/* Register Button */}
          <Button
            type="submit"
            className="w-full bg-[#FF5E01] hover:bg-[#D94F01] text-white py-3 rounded-lg transition-colors duration-300"
            disabled={
              !password || !passwordConfirm || password !== passwordConfirm
            }
          >
            {isSubmitting ? "Registering..." : "Register"}
          </Button>
        </form>
      </Form>

      {/* Login Link */}
      <p className="text-sm text-gray-700 text-center mt-6">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-[#FF5E01] hover:underline font-bold"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
