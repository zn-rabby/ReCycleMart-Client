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

const FilterSidebar = ({ products, onFilterChange }: FilterSidebarProps) => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(10000);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);

  // Extract unique categories, brands, and availability from products
  const categories = Array.from(new Set(products.map((product) => product.category)));
  const availabilityOptions = Array.from(new Set(products.map((product) => product.status)));

  // Handle filter changes
  const handleFilterChange = () => {
    const filters = {
      minPrice,
      maxPrice,
      categories: selectedCategories,
      ratings: selectedRatings,
      availability: selectedAvailability,
    };
    onFilterChange(filters); // Pass filters to the parent component
  };

  // Call handleFilterChange whenever any filter state changes
  useEffect(() => {
    handleFilterChange();
  }, [minPrice, maxPrice, selectedCategories, selectedRatings, selectedAvailability]);

  // Handle checkbox changes
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
    <Card className="p-4 rounded-2xl shadow-md full">
      <CardContent>
        <h2 className="text-lg font-semibold mb-4">Filter By Price</h2>
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
          max={1000}
          step={10}
          onValueChange={(val) => {
            setMinPrice(val[0]);
            setMaxPrice(val[1]);
          }}
        />
        <p className="mt-2">
          Price: ${minPrice} - ${maxPrice}
        </p>

        <h2 className="text-lg font-semibold mt-6">Categories</h2>
        <ul className="space-y-2 mt-2">
          {categories.map((category, index) => (
            <li key={index} className="flex items-center gap-2">
              <Checkbox
                checked={selectedCategories.includes(category)}
                onCheckedChange={() =>
                  handleCheckboxChange(category, selectedCategories, setSelectedCategories)
                }
              />
              <span>{category}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-lg font-semibold mt-6">Rating</h2>
        <ul className="space-y-2 mt-2">
          {[5, 4, 3, 2, 1].map((rating, index) => (
            <li key={index} className="flex items-center gap-2">
              <Checkbox
                checked={selectedRatings.includes(rating)}
                onCheckedChange={() =>
                  handleCheckboxChange(rating, selectedRatings, setSelectedRatings)
                }
              />
              <span className="text-yellow-500">
                {"★".repeat(rating)}
                {"☆".repeat(5 - rating)}
              </span>
            </li>
          ))}
        </ul>

        <h2 className="text-lg font-semibold mt-6">Availability</h2>
        <ul className="space-y-2 mt-2">
          {availabilityOptions.map((status, index) => (
            <li key={index} className="flex items-center gap-2">
              <Checkbox
                checked={selectedAvailability.includes(status)}
                onCheckedChange={() =>
                  handleCheckboxChange(status, selectedAvailability, setSelectedAvailability)
                }
              />
              <span>{status}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FilterSidebar;