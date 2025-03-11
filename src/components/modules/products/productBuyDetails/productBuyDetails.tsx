"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { createTransactions } from "@/services/Transactions";
import { IProduct } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const ProductBuyDetails = ({ product }: { product: IProduct }) => {
  const itemID = product._id;
  const { user } = useUser();
  const router = useRouter();

  const handleOrder = async () => {
    const orderLoading = toast.loading("Order is being placed...");

    try {
      if (!user) {
        router.push("/login");
        throw new Error("Please login first.");
      }

      const res = await createTransactions({ itemID });  // Pass an object with itemID

      if (res.success) {
        toast.success(res.message, { id: orderLoading });
        router.push(res.data.paymentUrl);  // Redirect to payment URL
      } else {
        toast.error(res.message, { id: orderLoading });
      }
    } catch (error: any) {
      toast.error(error.message, { id: orderLoading });
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 border border-white p-4 rounded-md my-5 shadow-sm">
      <div>
        <Image
          src={product?.images[0] || "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"}
          alt="product image"
          width={500}
          height={500}
          className="rounded-md w-full object-cover h-80"
        />
        <div className="grid grid-cols-3 gap-4 mt-5">
          {product?.images.slice(0, 3).map((image: string, idx: number) => (
            <Image
              key={idx}
              src={image}
              alt="product image"
              width={500}
              height={500}
              className="rounded-md w-full object-cover h-40"
            />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-md p-4">
        <h2 className="font-bold text-xl mb-4">{product?.title}</h2>
        <p className="text-justify text-gray-500 font-light text-sm">
          {product?.description}
        </p>
        <div className="flex items-center justify-between my-5 text-gray-500 text-xs">
          <p className="rounded-full px-4 py-1 bg-gray-100 flex items-center justify-center gap-1">
            <Star className="w-4 h-4" fill="orange" stroke="orange" />
            {product?.ratingCount} Ratings
          </p>
          <p className="rounded-full px-4 py-1 bg-gray-100">Stock: {product?.stock}</p>
          <p className="rounded-full px-4 py-1 bg-gray-100">Category: {product?.category}</p>
        </div>
        <hr />
        <p className="my-2 font-bold">
          Price: <span className="font-semibold">$ {product?.price}</span>
        </p>
        <hr />
        <Button onClick={handleOrder} className="w-full">Payment and Order Confirm</Button>
      </div>
    </div>
  );
};

export default ProductBuyDetails;