import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";


const staticCategories = [
  {
    id: 1,
    name: "Electronics",
    image: "https://res.cloudinary.com/daxjf1buu/image/upload/v1740103537/bv1teqdnsrn-1740103516267-images-istockphoto-1218656325-612x612-removebg-preview.png",
    slug: "electronics",
  },
  {
    id: 2,
    name: "Fashion",
    image: "https://res.cloudinary.com/daxjf1buu/image/upload/v1740100901/nd3klk5thmq-1740100883326-logo-ss.jpg",
    slug: "fashion",
  },
  {
    id: 3,
    name: "Home & Garden",
    image: "https://res.cloudinary.com/daxjf1buu/image/upload/v1740103537/bv1teqdnsrn-1740103516267-images-istockphoto-1218656325-612x612-removebg-preview.png",
    slug: "home-garden",
  },
  {
    id: 4,
    name: "Sports & Outdoors",
    image: "https://res.cloudinary.com/daxjf1buu/image/upload/v1726809989/rki9blsk60g-1726809982302-itemImages-22.jpg",
    slug: "sports-outdoors",
  },
  {
    id: 5,
    name: "Books & Media",
    image: "https://res.cloudinary.com/daxjf1buu/image/upload/v1740100901/nd3klk5thmq-1740100883326-logo-ss.jpg",
    slug: "books-media",
  },
  {
    id: 6,
    name: "Toys & Games",
    image: "https://res.cloudinary.com/daxjf1buu/image/upload/v1740103537/bv1teqdnsrn-1740103516267-images-istockphoto-1218656325-612x612-removebg-preview.png",
    slug: "toys-games",
  },
  {
    id: 7,
    name: "Health & Beauty",
    image: "https://res.cloudinary.com/daxjf1buu/image/upload/v1726809989/rki9blsk60g-1726809982302-itemImages-22.jpg",
    slug: "health-beauty",
  },
  {
    id: 8,
    name: "Automotive",
    image: "https://res.cloudinary.com/daxjf1buu/image/upload/v1740103537/bv1teqdnsrn-1740103516267-images-istockphoto-1218656325-612x612-removebg-preview.png",
    slug: "automotive",
  },
  {
    id: 9,
    name: "Art & Crafts",
    image: "https://res.cloudinary.com/daxjf1buu/image/upload/v1740100901/nd3klk5thmq-1740100883326-logo-ss.jpg",
    slug: "art-crafts",
  },
  {
    id: 10,
    name: "Jewelry & Accessories",
    image: "https://res.cloudinary.com/daxjf1buu/image/upload/v1726809989/rki9blsk60g-1726809982302-itemImages-22.jpg",
    slug: "jewelry-accessories",
  },
  {
    id: 11,
    name: "Pet Supplies",
    image: "https://res.cloudinary.com/daxjf1buu/image/upload/v1740103537/bv1teqdnsrn-1740103516267-images-istockphoto-1218656325-612x612-removebg-preview.png",
    slug: "pet-supplies",
  },
  {
    id: 12,
    name: "Baby & Kids",
    image: "https://res.cloudinary.com/daxjf1buu/image/upload/v1740100901/nd3klk5thmq-1740100883326-logo-ss.jpg",
    slug: "baby-kids",
  },
];


const CategoryCard = ({ category }: { category: any }) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-40">
          <Image
            src={category.image}
            alt={category.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-center">{category.name}</h3>
        </div>
      </div>
    </Link>
  );
};


const CategorySection = () => {
  return (
    <div className="container mx-auto mt-16 mb-6 p-3 md:p-0">
      <div className="flex items-center justify-between">
        <h2 className="lg:text-4xl text-2xl font-bold text-gray-800">Category</h2>
        <Link href="/products">
          <Button variant="outline" className="rounded-full">
            View All
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 my-5 ">
        {staticCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;