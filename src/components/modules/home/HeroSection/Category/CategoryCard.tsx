/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CategoryCard({ category }: { category: any }) {
  const router = useRouter();

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-[220px] relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 group"
      onClick={() => router.push(`/category/${category.title}`)}
    >
      <div className="w-full h-full relative">
        <Image
          src={category?.image}
          alt="Thumbnail Image"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 text-center p-2 bg-opacity-10 bg-black">
        <p className="text-white group-hover:text-[#F65D4E]">
          {category?.label}
        </p>
      </div>
    </div>
  );
}
