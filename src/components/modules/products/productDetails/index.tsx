import { Button } from "@/components/ui/button";
import { IProduct } from "@/types";
import { Star } from "lucide-react"; // Removed Link from Lucide
import Image from "next/image";
import Link from "next/link"; // Added Link from Next.js

const ProductDetails = ({ product }: { product: IProduct }) => {
  console.log(product, "details page");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-200 p-4 rounded-md my-5 shadow-sm bg-white">
      {/* Product Images Section */}
      <div>
        <Image
          src={
            product?.images[0] ||
            "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"
          }
          alt="product image"
          width={500}
          height={500}
          className="rounded-md w-full object-cover h-60 md:h-80"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
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

      {/* Product Details Section */}
      <div className="bg-gray-50 rounded-md p-4">
        <h2 className="font-bold text-lg md:text-xl mb-4 text-gray-800">
          {product?.title}
        </h2>
        <p className="text-justify text-gray-600 font-light text-sm">
          {product?.description}
        </p>
        <div className="flex flex-wrap items-center justify-between my-5 text-gray-600 text-xs gap-2">
          <p className="rounded-full px-4 py-1 bg-gray-100 flex items-center justify-center gap-1">
            <Star className="w-4 h-4" fill="orange" stroke="orange" />
            {product?.ratingCount} Ratings
          </p>
          <p className="rounded-full px-4 py-1 bg-gray-100">
            Stock: {product?.stock}
          </p>
          <p className="rounded-full px-4 py-1 bg-gray-100">
            Category: {product?.category}
          </p>
        </div>
        <hr className="border-gray-200" />
        <p className="my-2 font-bold text-gray-800">
          Price: <span className="font-semibold">$ {product?.price}</span>
        </p>
        <hr className="border-gray-200" />

        {/* Buttons */}
        <Button
          variant="outline"
          className="w-full my-5 bg-white text-gray-800 hover:bg-gray-100 border-gray-300"
        >
          Add To Cart
        </Button>
        <Link href={`/buy/${product?._id}`} passHref>
            <Button
              className="w-full bg-[#FF5E01] hover:bg-[#D94F01] text-white transition-all duration-200"
            >
              Buy
            </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;