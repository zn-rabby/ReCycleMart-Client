/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ProductCard from "@/components/ui/core/ProductCard";
import { IProduct } from "@/types";
import FilterSidebar from "./filterSidebar";
import { useState } from "react";

const AllProducts = ({ products }: { products: IProduct[] }) => {
  const [filteredProducts, setFilteredProducts] =
    useState<IProduct[]>(products);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("default");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showSidebar, setShowSidebar] = useState(false); // New state for mobile sidebar
  const productsPerPage = 9;

  // 🔍 Handle Filters
  const handleFilterChange = (filters: any) => {
    let filtered = products;

    // Filter by price range
    filtered = filtered.filter(
      (product) =>
        product.price >= filters.minPrice && product.price <= filters.maxPrice
    );

    // Filter by category
    if (filters.categories.length > 0) {
      filtered = filtered.filter((product) =>
        filters.categories.includes(product.category)
      );
    }

    // Filter by ratings
    if (filters.ratings.length > 0) {
      filtered = filtered.filter((product) =>
        filters.ratings.includes(Math.floor(product.ratingCount ?? 0))
      );
    }

    // Filter by availability
    if (filters.availability.length > 0) {
      filtered = filtered.filter((product) =>
        filters.availability.includes(product.status)
      );
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  // 🔎 Handle Search
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // ⬇️⬆️ Handle Sort
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
    setCurrentPage(1);
  };

  // 🔃 Combine search + sort
  const sortedAndFilteredProducts = filteredProducts
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      if (sortOption === "rating")
        return (b.ratingCount ?? 0) - (a.ratingCount ?? 0);
      return 0;
    });

  // 📄 Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedAndFilteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(
    sortedAndFilteredProducts.length / productsPerPage
  );

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 my-10 px-4 md:px-0">
      {/* Mobile Filter Button */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="md:hidden bg-[#FF5E01] text-white py-2 px-4 rounded-lg mb-4 w-full"
      >
        {showSidebar ? "Hide Filters" : "Show Filters"}
      </button>

      {/* Sidebar - Hidden on mobile unless toggled */}
      <div
        className={`${
          showSidebar ? "block" : "hidden"
        } md:block w-full md:w-1/4`}
      >
        <FilterSidebar
          products={products}
          onFilterChange={handleFilterChange}
        />
      </div>

      {/* Main Section - Full width on mobile */}
      <div className="w-full md:w-3/4">
        {/* Search & Sort - Stacked on mobile */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <input
            type="search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="border px-4 py-2 rounded w-full sm:w-1/2"
          />
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="border px-4 py-2 rounded w-full sm:w-1/3 md:w-1/4"
          >
            <option value="default">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rating</option>
          </select>
        </div>

        {/* Products Grid - 1 column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.length > 0 ? (
            currentProducts.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center text-muted-foreground py-10">
              No products found.
            </div>
          )}
        </div>

        {/* Pagination - Adjust spacing for mobile */}
        {totalPages > 1 && (
          <div className="flex flex-wrap justify-center mt-6 gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 md:px-4 md:py-2 border rounded transition ${
                  currentPage === page
                    ? "bg-[#FF5E01] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
