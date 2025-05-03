/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { createTransactions } from "@/services/Transactions";
import { IProduct } from "@/types";
import {
  Star,
  ChevronRight,
  ShieldCheck,
  Truck,
  CreditCard,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";

const ProductBuyDetails = ({ product }: { product: IProduct }) => {
  const { user } = useUser();
  const router = useRouter();
  const [mainImage, setMainImage] = useState(
    product?.images[0] ||
      "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"
  );

  const handleOrder = async () => {
    const itemID = product._id;
    const orderLoading = toast.loading("Processing your order...");

    try {
      if (!user) {
        router.push("/login");
        throw new Error("Please login to continue");
      }

      const res = await createTransactions({ itemID });

      if (res.success) {
        toast.success("Order placed successfully!", { id: orderLoading });
        router.push(res.data.paymentUrl);
      } else {
        toast.error(res.message, { id: orderLoading });
      }
    } catch (error: any) {
      toast.error(error.message, { id: orderLoading });
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Gallery */}
        <div className="w-full md:w-1/2">
          <div className="relative h-96 bg-gray-50 rounded-xl overflow-hidden mb-4">
            <Image
              src={mainImage}
              alt={product?.title}
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {product?.images.slice(0, 3).map((image: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setMainImage(image)}
                className={`relative aspect-square bg-gray-50 rounded-lg overflow-hidden border-2 ${
                  mainImage === image
                    ? "border-orange-500"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={image}
                  alt={`Product preview ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {product?.title}
              </h1>
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < (product?.ratingCount || 0)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg text-gray-500 ml-2">
                  {product?.ratingCount} reviews
                </span>
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-lg text-green-600 font-medium">
                  {product?.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <p className="text-3xl font-semibold text-gray-900">
                ${product?.price.toFixed(2)}
              </p>
              <p className="text-gray-500 mt-2">{product?.description}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <Truck className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-lg text-gray-600">
                  Free shipping on orders over $50
                </span>
              </div>
              <div className="flex items-center">
                <ShieldCheck className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-lg text-gray-600">
                  30-day return policy
                </span>
              </div>
              <div className="flex items-center">
                <CreditCard className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-lg text-gray-600">
                  Secure payment options
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Button
                onClick={handleOrder}
                className="w-full py-6 text-lg font-medium bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg cursor-pointer"
              >
                Proceed to Payment
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="grid grid-cols-2 gap-4 text-lg">
                <div>
                  <p className="text-gray-500">Category</p>
                  <p className="font-medium capitalize">{product?.category}</p>
                </div>
                <div>
                  <p className="text-gray-500">Condition</p>
                  <p className="font-medium capitalize">{product?.condition}</p>
                </div>
                <div>
                  <p className="text-gray-500">Location</p>
                  <p className="font-medium">{product?.location}</p>
                </div>
                <div>
                  <p className="text-gray-500">Status</p>
                  <p className="font-medium capitalize">{product?.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBuyDetails;
