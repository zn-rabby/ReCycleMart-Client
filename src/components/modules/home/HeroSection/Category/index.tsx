import CategoryCard from "./CategoryCard";
import NMContainer from "@/components/ui/core/NMContainer";

const categories = [
  {
    title: "mobiles",
    label: "Smartphones",
    image:
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    title: "electronics",
    label: "Electronics",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    title: "vehicles",
    label: "Cars & Bikes",
    image:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    title: "property",
    label: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    title: "home",
    label: "Home & Living",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    title: "pets",
    label: "Pets & Supplies",
    image:
      "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    title: "fashion",
    label: "Fashion",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    title: "sports",
    label: "Sports & Outdoors",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
  },
];

export default async function AllCategories() {
  return (
    <section className="py-16 bg-white">
      <NMContainer>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our carefully selected product categories
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {categories?.map((category) => (
            <CategoryCard key={category.title} category={category} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 transition-colors duration-200">
            Explore All Categories
          </button>
        </div>
      </NMContainer>
    </section>
  );
}
