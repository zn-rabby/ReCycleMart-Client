"use client";

import { Button } from "@/components/ui/button";
import NMContainer from "@/components/ui/core/NMContainer";
import ProductCard from "@/components/ui/core/ProductCard";
import { getAllProducts } from "@/services/Product";
import { IProduct } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

const FeaturedProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await getAllProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Slice the first 8 products
  const displayedProducts = products?.slice(0, 8);

  return (
    <div className="bg-white bg-opacity-50 pt-6 pb-8">
      <NMContainer className="my-16">
        <div className="flex items-center justify-between">
          <h2 className="lg:text-4xl text-2xl font-bold text-gray-800">Featured Products</h2>
          <Link href="/products">
            <Button variant="outline" className="rounded-full">
              All Collection
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {displayedProducts.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </NMContainer>
    </div>
  );
};

export default FeaturedProducts;