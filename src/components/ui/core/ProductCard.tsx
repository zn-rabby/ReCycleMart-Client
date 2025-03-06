"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAppDispatch } from "@/redux/hooks";
import { addProduct } from "@/services/Product";

import { IProduct } from "@/types";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: IProduct }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png";
  };

  // const dispatch = useAppDispatch();

  // const handleAddProduct = (product: IProduct) => {
  //   dispatch(addProduct(product));
  // };

  return (
    <Card className="p-3 hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="relative p-0 h-48">
        <Image
          src={
            product?.images[0] ||
            "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"
          }
          width={500}
          height={500}
          alt="product image"
          className="rounded-sm h-52 w-full object-cover"
          onError={handleImageError}
        />
        {product?.condition === "used" && (
          <div className="absolute right-2 top-1 bg-red-500 text-white px-2 py-1 text-xs rounded-full">
            Used
          </div>
        )}
        
      </CardHeader>

      <CardContent className="p-0 mt-3">
          <CardTitle
            title={product?.title}
            className="font-semibold cursor-pointer text-sm hover:text-blue-600 transition-colors duration-300"
          >
            {product?.title.length > 20
              ? product?.title?.slice(0, 20) + "..."
              : product?.title}
          </CardTitle>
       

        <div className="flex items-center justify-between my-2">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Category: {product?.category}</span>
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">$ {product?.price.toFixed(2)}</span>
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
                index < (product?.ratingCount || 0) ? "currentColor" : "transparent"
              }
            />
          ))}
          <span className="text-sm text-gray-500 ml-2">
            ({product?.ratingCount || 0})
          </span>
        </div>
      </CardContent>

      <CardFooter className="block p-0 mt-3">
        <div className="flex gap-2 items-center justify-between">
        <Link href={`/products/${product?._id}`} passHref>
          <Button
            disabled={product?.status !== "available"}
            size="sm"
            variant="default"
            className="w-32 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Details
          </Button>   </Link>
        <Link href={`/buy/${product?._id}`} passHref>
          <Button
            disabled={product?.status !== "available"}
            size="sm"
            variant="default"
            className="w-32 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Buy
          </Button>   </Link>
          <Button
            // onClick={() => handleAddProduct(product)}
            disabled={product?.status !== "available"}
            variant="outline"
            size="sm"
            className="w-8 h-8 p-0 flex items-center justify-center rounded-full border-gray-300 hover:border-blue-600"
          >
            <ShoppingCart className="h-4 w-4 text-gray-600 hover:text-blue-600" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;