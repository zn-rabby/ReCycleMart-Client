"use client"
import { Button } from "@/components/ui/button";
import { IProduct } from "@/types";
import Image from "next/image";
import { Trash, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { removeProduct } from "@/redux/features/cartSlice";

export default function WishlistProductCard({ product }: { product: IProduct }) {
  const dispatch = useAppDispatch();
 
  const handleRemoveProduct = (id: string) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="bg-white rounded-lg flex items-center p-5 gap-5 shadow-sm hover:shadow-md transition-shadow">
      {/* Product Image with Link */}
      <Link href={`/products/${product?._id}`} className="h-32 w-32 rounded-md overflow-hidden flex-shrink-0">
        <Image
          src={product?.images?.[0]}
          height={200}
          width={200}
          alt={product?.title}
          className="aspect-square object-cover hover:scale-105 transition-transform"
        />
      </Link>

      {/* Product Details (Middle Section) */}
      <div className="flex flex-col justify-center flex-grow">
        {/* Title and Price */}
        <Link href={`/products/${product?._id}`}>
          <h1 className="text-xl font-semibold hover:text-blue-600 transition-colors">
            {product?.title}
          </h1>
          <p className="text-gray-600 mt-1">${product?.price}</p>
        </Link>

        {/* Stock Availability */}
        <p className="text-sm text-gray-500 mt-2">
          <span>Stock:</span>{" "}
          <span className={product?.stock > 0 ? "text-green-500" : "text-red-500"}>
            {product?.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </p>
      </div>

      {/* Buttons (Right Section) */}
      <div className="flex flex-col items-end gap-3">
        {/* Remove from Wishlist Button */}
        <Button
          variant="ghost"
          className="text-red-500 hover:bg-red-50"
          onClick={() => handleRemoveProduct(product._id)}
          aria-label="Remove from Wishlist"
        >
          <Trash className="w-8 h-8"/>
        </Button>

        {/* Buy Now Button */}
        <Link href={`/products/${product?._id}`}>
          <Button
            variant="default"
            className="w-28 flex items-center gap-2"
            disabled={product?.stock <= 0}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Buy Now</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}