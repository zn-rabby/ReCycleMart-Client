import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

export default function BlogCard() {
  return (
    <Card className="w-full max-w-lg overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white">
      {/* Image Section */}
      <div className="relative w-full h-64">
        <Image
          src="https://res.cloudinary.com/daxjf1buu/image/upload/v1734972500/2030020006Student000.jpg"
          alt="ReCycleMart Blog"
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Content Section */}
      <CardContent className="p-6 space-y-5">
        {/* Category & Date */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
            Marketplace
          </span>
          <span>March 23, 2025</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900">
          The Future of Second-Hand Marketplaces
        </h2>

        <Separator className="bg-gray-300" />

        {/* Description */}
        <p className="text-gray-600 text-md leading-relaxed">
          Discover how ReCycleMart is revolutionizing the second-hand market by
          connecting buyers and sellers with ease and security.
        </p>

        {/* Read More Button */}
        <div className="text-left">
          <Button className="bg-[#D94F01] text-white hover:bg-[#B03C00] transition-all duration-300 py-2 px-6 rounded-full font-medium shadow-lg">
            Read More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
