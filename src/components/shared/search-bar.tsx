"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDebounce } from "@/hooks/use-debounce";
import { toast } from "sonner";

interface Medicine {
  _id: string;
  name: string;
  type: string;
  price: number;
  description: string;
  category: {
    _id: string;
    name: string;
  };
  manufacturer: {
    _id: string;
    name: string;
  };
  images: string[];
}

interface SearchBarProps {
  className?: string;
}

export function SearchBar({ className }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<Medicine[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const debouncedSearch = useDebounce(searchQuery, 300);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchResults = async () => {
      if (debouncedSearch.length < 2) {
        setResults([]);
        setError(null);
        return;
      }

      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${
            process.env.NEXT_PUBLIC_BASE_API
          }/listings?searchTerm=${encodeURIComponent(debouncedSearch)}&limit=5`
        );
        if (!response.ok) {
          throw new Error(`Search failed: ${response.statusText}`);
        }
        const data = await response.json();
        setResults(data.data || []);
      } catch (error) {
        console.error("Search error:", error);
        setError("An error occurred while searching. Please try again.");
        toast.error("Failed to fetch search results. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [debouncedSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowResults(true);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setResults([]);
    setShowResults(false);
  };

  const handleResultClick = (productId: string) => {
    router.push(`/products/${productId}`);
    handleClearSearch();
  };

  return (
    <div ref={searchRef} className={cn("relative w-full max-w-md", className)}>
      {/* Search input - always visible */}
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for products"
          className="w-full border border-gray-100 rounded py-2 pl-5 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        {searchQuery && (
          <button
            onClick={handleClearSearch}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Search results dropdown */}
      {showResults && (results.length > 0 || isLoading || error) && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-[60vh] overflow-y-auto z-50">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">Loading...</div>
          ) : error ? (
            <div className="p-4 text-center text-red-500">{error}</div>
          ) : (
            <div className="divide-y divide-gray-100">
              {results?.map((product) => (
                <button
                  key={product._id}
                  onClick={() => handleResultClick(product._id)}
                  className="w-full text-left p-3 hover:bg-gray-50 transition-colors flex items-start gap-3 cursor-pointer"
                >
                  {product.images && product.images.length > 0 ? (
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={48}
                      height={48}
                      className="object-cover rounded-md h-12 w-12"
                    />
                  ) : (
                    <div className="h-12 w-12 bg-gray-100 rounded-md flex items-center justify-center">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm line-clamp-1 text-gray-800">
                      {product.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {product.category?.name}{" "}
                      {product?.description.slice(0, 60)}
                    </p>
                    <p className="text-sm font-semibold text-primary mt-1">
                      $ {product.price.toFixed(2)}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
