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
import RLogo from "../../../../assets/svgs/RLogo.svg";
import Image from "next/image";

import { registerUser } from "@/services/AuthService";

export default function RegisterForm() {
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
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-8">
      {/* Logo and Heading */}
      <div className="flex flex-col items-center mb-8">
        <div className="flex justify-center items-center">
          <Image src={RLogo} height={30} width={30} alt="r-logo"></Image>
          <p className="text-xl font-bold text-[#FF5E01]">ReCycleMart</p>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mt-4">
          Join ReCycleMart
        </h1>
        <p className="text-gray-600">
          Create your account and start your journey!
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
      <p className="text-sm text-gray-600 text-center mt-6">
        Already have an account?{" "}
        <Link href="/login" className="text-[#FF5E01] hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
