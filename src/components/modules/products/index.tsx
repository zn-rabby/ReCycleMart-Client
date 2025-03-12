"use client";

import ProductCard from "@/components/ui/core/ProductCard";
import { IProduct } from "@/types";
import FilterSidebar from "./filterSidebar";
import { useState } from "react";

const AllProducts = ({ products }: { products: IProduct[] }) => {
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>(products);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("default");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 6;

  const handleFilterChange = (filters: any) => {
    let filtered = products;

    filtered = filtered.filter(
      (product) =>
        product.price >= filters.minPrice && product.price <= filters.maxPrice
    );

    if (filters.categories.length > 0) {
      filtered = filtered.filter((product) =>
        filters.categories.includes(product.category)
      );
    }

    if (filters.ratings.length > 0) {
      filtered = filtered.filter((product) =>
        filters.ratings.includes(Math.floor(product.ratingCount))
      );
    }

    if (filters.availability.length > 0) {
      filtered = filtered.filter((product) =>
        filters.availability.includes(product.status)
      );
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
    setCurrentPage(1);
  };

  const sortedAndFilteredProducts = filteredProducts
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      if (sortOption === "rating") return b.ratingCount - a.ratingCount;
      return 0;
    });

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedAndFilteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(sortedAndFilteredProducts.length / productsPerPage);

  return (
    <div className="flex flex-col md:flex-row gap-8 my-10">
    {/* Filter Sidebar */}
    <FilterSidebar products={products} onFilterChange={handleFilterChange} />
  
    {/* Main Content */}
    <div className="w-full">
      {/* Search and Sort Section */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
        <input
          type="search"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border px-4 py-2 rounded w-full md:w-1/3"
        />
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="border px-4 py-2 rounded w-full md:w-auto"
        >
          <option value="default">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Highest Rating</option>
        </select>
      </div>
  
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
  
      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-2 border rounded ${
              currentPage === page ? "bg-[#FF5E01] text-white" : "bg-white"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  </div>
  );
};

export default AllProducts;
