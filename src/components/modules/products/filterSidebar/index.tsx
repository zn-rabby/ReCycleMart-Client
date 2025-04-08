/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";
import { IProduct } from "@/types";

interface FilterSidebarProps {
  products: IProduct[];
  onFilterChange: (filters: any) => void;
}

const CATEGORIES = [
  "mobiles",
  "electronics",
  "vehicles",
  "property",
  "home",
  "pets",
  "cloths",
  "sports",
];

const FilterSidebar = ({ products, onFilterChange }: FilterSidebarProps) => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(10000);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>(
    []
  );

  const availabilityOptions = Array.from(
    new Set(products.map((p) => p.status))
  );

  const handleFilterChange = () => {
    const filters = {
      minPrice,
      maxPrice,
      categories: selectedCategories,
      ratings: selectedRatings,
      availability: selectedAvailability,
    };
    onFilterChange(filters);
  };

  useEffect(() => {
    handleFilterChange();
  }, [
    minPrice,
    maxPrice,
    selectedCategories,
    selectedRatings,
    selectedAvailability,
  ]);

  const handleCheckboxChange = (
    value: string | number,
    state: any[],
    setState: React.Dispatch<React.SetStateAction<any[]>>
  ) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  return (
    <Card className="p-4 rounded-2xl shadow-md w-full md:w-80 sticky top-24 h-fit">
      <CardContent className="space-y-6">
        {/* Price Filter */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Price Range</h2>
          <div className="flex gap-2 mb-2">
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="border rounded px-2 py-1 w-full"
            />
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <Slider
            defaultValue={[minPrice, maxPrice]}
            min={0}
            max={10000}
            step={100}
            onValueChange={(val) => {
              setMinPrice(val[0]);
              setMaxPrice(val[1]);
            }}
          />
          <p className="text-sm text-muted-foreground mt-1">
            ${minPrice} - ${maxPrice}
          </p>
        </div>

        {/* Category Filter */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Categories</h2>
          <ul className="space-y-2">
            {CATEGORIES.map((category, index) => (
              <li key={index} className="flex items-center gap-2 capitalize">
                <Checkbox
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() =>
                    handleCheckboxChange(
                      category,
                      selectedCategories,
                      setSelectedCategories
                    )
                  }
                />
                <span>{category}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Rating Filter */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Ratings</h2>
          <ul className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <li key={rating} className="flex items-center gap-2">
                <Checkbox
                  checked={selectedRatings.includes(rating)}
                  onCheckedChange={() =>
                    handleCheckboxChange(
                      rating,
                      selectedRatings,
                      setSelectedRatings
                    )
                  }
                />
                <span className="text-yellow-500">
                  {"★".repeat(rating)}
                  {"☆".repeat(5 - rating)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Availability Filter */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Availability</h2>
          <ul className="space-y-2">
            {availabilityOptions.map((status, index) => (
              <li key={index} className="flex items-center gap-2 capitalize">
                <Checkbox
                  checked={selectedAvailability.includes(status)}
                  onCheckedChange={() =>
                    handleCheckboxChange(
                      status,
                      selectedAvailability,
                      setSelectedAvailability
                    )
                  }
                />
                <span>{status}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default FilterSidebar;
