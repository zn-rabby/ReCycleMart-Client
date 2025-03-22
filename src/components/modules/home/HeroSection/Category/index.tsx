/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Updated static categories with real images
const staticCategories = [
  {
    id: 1,
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "electronics",
  },
  {
    id: 2,
    name: "Fashion",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "fashion",
  },
  {
    id: 3,
    name: "Home & Garden",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "home-garden",
  },
  {
    id: 4,
    name: "Sports & Outdoors",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "sports-outdoors",
  },
  {
    id: 5,
    name: "Books & Media",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "books-media",
  },
  {
    id: 6,
    name: "Toys & Games",
    image:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "toys-games",
  },
];

const CategoryCard = ({ category }: { category: any }) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
        <div className="relative h-48">
          <Image
            src={category.image}
            alt={category.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-center text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {category.name}
          </h3>
        </div>
      </div>
    </Link>
  );
};

const CategorySection = () => {
  return (
    <div className="container mx-auto mt-16 mb-6 p-3 md:p-0">
      <div className="flex items-center justify-between">
        <h2 className="lg:text-4xl text-2xl font-bold text-gray-800">
          Shop by Category
        </h2>
        <Link href="/products">
          <Button variant="outline" className="rounded-full">
            View All
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 my-8">
        {staticCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
