"use client"

import ProductCard from "@/components/ui/core/ProductCard";
import { IProduct } from "@/types";
import FilterSidebar from "./filterSidebar";


  

const AllProducts = ({ products }: { products: IProduct[] }) => {

    const handleFilterChange = (filters: any) => {
        console.log("Filters changed:", filters);
        // You could set some state here to filter the products dynamically
      };

  return (
    <div className="flex gap-8 my-10">
      <div>
      <FilterSidebar 
          products={products} 
          onFilterChange={handleFilterChange} 
        />
      </div>
      <div>
        <div className="grid grid-cols-3 gap-8">
          {products?.map((product: IProduct, idx: number) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;