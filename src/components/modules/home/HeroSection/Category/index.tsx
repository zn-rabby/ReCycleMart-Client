/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import NMContainer from "@/components/ui/core/NMContainer";
import Image from "next/image";

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
    title: "cloths",
    label: "Cloths",
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

export default function AllCategories() {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainer.current) {
      const cardWidth = 300; // Approximate card width + gap
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollContainer.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className=" bg-white ">
      <NMContainer>
        <div className="flex items-center justify-between my-10">
          <h2 className="lg:text-3xl text-2xl font-bold text-gray-800">
            Shop by Category
          </h2>
        </div>

        {/* Scrollable container with hidden scrollbar */}
        <div className="relative p-3">
          <div
            ref={scrollContainer}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4"
            style={{
              scrollbarWidth: "none" /* Firefox */,
              msOverflowStyle: "none" /* IE/Edge */,
            }}
          >
            {categories.slice(0, 8).map((category) => (
              <div
                key={category.title}
                className="flex-shrink-0 w-[calc(100%-32px)] sm:w-[calc(50%-16px)] md:w-[calc(33.333%-16px)] lg:w-[calc(16.666%-16px)] snap-start"
              >
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </NMContainer>
    </section>
  );
}

function CategoryCard({ category }: { category: any }) {
  const router = useRouter();

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-[180px] sm:h-[220px] relative overflow-hidden rounded-lg cursor-pointer group"
      onClick={() => router.push(`/category/${category.title}`)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
      <Image
        src={category.image}
        alt={category.label}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
      />
      <div className="absolute bottom-4 left-4 z-20 text-white font-medium text-lg">
        {category.label}
      </div>
    </div>
  );
}
