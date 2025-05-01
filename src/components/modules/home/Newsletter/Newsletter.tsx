"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { toast } from "sonner";
import { addNewsletter } from "@/services/Newsletter";
import { Leaf, Recycle } from "lucide-react";
import NMContainer from "@/components/ui/core/NMContainer";

export default function Newsletter() {
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    try {
      const response = await addNewsletter(data);
      if (response?.success) {
        toast.success("🎉 Welcome to ReCycleMart!", {
          description: "You'll receive eco-friendly tips and exclusive offers",
          style: {
            background: "#FFFFFF", // White background
            color: "#3C3C3C", // Dark gray text for readability
            borderColor: "#3C78D8", // Blue border
            borderWidth: "1px",
          },
        });
        form.reset();
      } else {
        toast.error(response.error[0]?.message || "Please use a valid email", {
          style: {
            background: "#FFFFFF", // White background
            color: "#3C3C3C", // Dark gray text for readability
            borderColor: "#3C78D8", // Blue border
            borderWidth: "1px",
          },
        });
      }
    } catch {
      toast.error("Oops! Something went wrong. Please try again.", {
        style: {
          background: "#101828", // Same dark background
          color: "#fff", // White text
          borderColor: "#E97534", // Lighter orange border
        },
      });
    }
  };

  return (
    <section className="w-full my-16 px-4 py-12 flex justify-center items-center relative overflow-hidden">
      {/* Modern background with new color theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E17] to-[#E45301] opacity-95"></div>

      {/* Decorative elements */}
      <Recycle className="absolute left-10 top-8 text-white/10 w-32 h-32" />
      <Leaf className="absolute right-12 bottom-6 text-white/10 w-28 h-28" />

      <NMContainer>
        <div className=" w-full text-center relative z-10 px-6 py-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="flex flex-col items-center mb-6">
            <Recycle className="text-[#E97534] w-10 h-10 mb-3" />
            <h2 className="text-3xl font-bold text-white mb-2">
              Join the ReCycleMart Community
            </h2>
            <p className="text-lg text-[#E97534]/90 max-w-lg">
              Get exclusive deals, recycling tips, and updates on sustainable
              products
            </p>
          </div>

          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col sm:flex-row gap-4 items-end justify-center w-full">
                <div className="flex-1 w-full">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="text-left">
                        <FormLabel className="text-white/90 text-sm font-medium">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="your.email@example.com"
                            className="bg-[#0A0E17]/80 text-white placeholder:text-white/70 border-[#E45301]/50 focus:ring-2 focus:ring-[#E97534] h-12 w-full"
                          />
                        </FormControl>
                        <FormMessage className="text-[#E97534]" />
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  className="bg-gradient-to-r from-[#E45301] to-[#E97534] hover:from-[#E45301]/90 hover:to-[#E97534]/90 text-white h-12 px-8 font-medium transition-all hover:scale-105 hover:shadow-lg whitespace-nowrap"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                </Button>
              </div>
            </form>
          </FormProvider>

          <p className="text-sm text-white/80 mt-6">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </NMContainer>
    </section>
  );
}
