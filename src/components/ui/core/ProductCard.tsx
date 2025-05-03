"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { addProduct } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { IProduct } from "@/types";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Import useState

const ProductCard = ({ product }: { product: IProduct }) => {
  const dispatch = useAppDispatch();
  const [isHeartClicked, setIsHeartClicked] = useState(false); // State to track if heart button is clicked

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src =
      "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png";
  };

  const handleAddProduct = (product: IProduct) => {
    dispatch(addProduct(product)); // Add product to Redux store
    setIsHeartClicked(true); // Update state to indicate heart button is clicked
  };

  return (
    <Card className="p-3 border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="relative p-0 h-52 overflow-hidden rounded-lg">
        <Image
          src={
            product?.images[0] ||
            "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"
          }
          width={500}
          height={500}
          alt="product image"
          className="rounded-md h-52 w-full object-cover transition-transform duration-300 hover:scale-105"
          onError={handleImageError}
        />

        {product?.condition === "used" && (
          <div className="absolute left-2 top-1 bg-red-500 text-white px-2 py-1 text-xs rounded-full">
            Used
          </div>
        )}

        <button
          onClick={() => handleAddProduct(product)}
          disabled={isHeartClicked} // Disable button after click
          className={`absolute right-2 top-2 p-2 rounded-full shadow-sm transition-transform duration-200 hover:scale-110 ${
            isHeartClicked
              ? "bg-green-500 hover:bg-green-600 cursor-not-allowed" // Change color and cursor if heart is clicked
              : "bg-[#FF5E01] hover:bg-[#D94F01]" // Default color
          }`}
        >
          <Heart
            className={`h-5 w-5 text-white cursor-pointer ${
              isHeartClicked ? "fill-white" : "fill-transparent" // Fill heart icon if clicked
            }`}
          />
        </button>
      </CardHeader>

      <CardContent className="p-2">
        <Link href={`/products/${product?._id}`} passHref>
          <CardTitle
            title={product?.title}
            className="font-semibold cursor-pointer text-sm hover:text-blue-600 transition-colors duration-300"
          >
            {product?.title.length > 22
              ? product?.title.slice(0, 22) + "..."
              : product?.title}
          </CardTitle>
        </Link>

        <div className="flex items-center justify-between mt-2">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Category:</span> {product?.category}
          </p>
          <p className="text-sm font-semibold text-gray-800">
            <span className="text-bold">$ </span>
            {product?.price.toFixed(2)}
          </p>
        </div>

        <div className="flex items-center mt-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${
                index < (product?.ratingCount || 0)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
              fill={
                index < (product?.ratingCount || 0)
                  ? "currentColor"
                  : "transparent"
              }
            />
          ))}
          <span className="text-sm text-gray-500 ml-2">
            ({product?.ratingCount || 0})
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-0 mt-3">
        <div className="flex gap-2 items-center justify-between w-full">
          <Link href={`/products/${product?._id}`} passHref>
            <Button
              disabled={product?.status !== "available"}
              size="sm"
              className="w-24 bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 transition-all duration-200 cursor-pointer"
            >
              Details
            </Button>
          </Link>
          <Link href={`/buy/${product?._id}`} passHref>
            <Button
              disabled={product?.status !== "available"}
              size="sm"
              className="w-24 bg-[#FF5E01] hover:bg-[#D94F01] text-white transition-all duration-200 cursor-pointer"
            >
              Buy
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
