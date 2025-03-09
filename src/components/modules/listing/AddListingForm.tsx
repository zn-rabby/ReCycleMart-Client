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
import { SubmitHandler, useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Logo from "@/assets/svgs/Logo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { IProduct } from "@/types";
import { addProduct } from "@/services/Product";

export default function AddProductsForm() {
  const [imageLinks, setImageLinks] = useState<string[]>([]);
  const router = useRouter();

  const form = useForm<IProduct>({
    defaultValues: {
      name: "",
      title: "",
      description: "",
      ratingCount: 4,
      price: 0,
      condition: "new",
      images: [],
      category: "electronics",
      location: "",
      status: "available",
      stock: 0,
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<IProduct> = async (data) => {
    // Convert string fields to numbers
    data.ratingCount = Number(data.ratingCount);
    data.price = Number(data.price);
    data.stock = Number(data.stock);

    // Add image links to the data
    data.images = imageLinks;

    console.log(data);

    try {
      const res = await addProduct(data);
      console.log(res);

      if (res.success) {
        toast.success(res.message);
        router.push("/dashboard/listing");
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  const handleImageLinksChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const links = e.target.value.split(",").map((link) => link.trim());
    setImageLinks(links);
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-2xl p-5">
      <div className="flex items-center space-x-4 mb-5">
        <Logo />
        <h1 className="text-xl font-bold">Add Product</h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center border-t border-b py-3 my-5">
            <p className="text-primary font-bold text-xl">Basic Information</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Price */}
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Rating */}
            <FormField
              control={form.control}
              name="ratingCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Condition */}
            <FormField
              control={form.control}
              name="condition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Condition</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl className="w-full" >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Condition" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="used">Used</SelectItem>
                      <SelectItem value="refurbished">Refurbished</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Category */}
            <FormField  
           
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem >
                  <FormLabel>Category</FormLabel>
                  <Select  onValueChange={field.onChange} value={field.value}>
                    <FormControl className="w-full" >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="clothing">Clothing</SelectItem>
                      <SelectItem value="gadgets">Gadgets</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Location */}
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Status */}
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl className="w-full" >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="available">Available</SelectItem>
                      <SelectItem value="sold">Sold</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="hidden">Hidden</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Stock */}
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Description */}
          <div className="my-5">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea className="h-36 resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Images */}
          <div>
            <div className="flex justify-between items-center border-t border-b py-3 my-5">
              <p className="text-primary font-bold text-xl">Images</p>
            </div>
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image Links (comma-separated)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter image links separated by commas"
                      onChange={handleImageLinksChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-wrap gap-2 mt-4">
              {imageLinks.map((link, index) => (
                <img
                  key={index}
                  src={link}
                  alt={`Preview ${index}`}
                  className="w-24 h-24 object-cover rounded"
                  onError={(e) => {
                    // Handle broken image links
                    e.currentTarget.src = "https://via.placeholder.com/100";
                  }}
                />
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="mt-5 w-full" disabled={isSubmitting}>
            {isSubmitting ? "Adding Listing....." : "Add Listing"}
          </Button>
        </form>
      </Form>
    </div>
  );
}