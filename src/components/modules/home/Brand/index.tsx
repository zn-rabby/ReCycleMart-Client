"use client";
import NMContainer from "@/components/ui/core/NMContainer";
import { brands } from "@/constants/brandName";

const Brand = () => {
  return (
    <NMContainer>
      <div className="my-16 container mx-auto w-full px-4 lg:px-0">
        {/* Header Section */}
        <div className=" mb-8">
          <h1 className="lg:text-3xl text-2xl font-bold text-gray-800">
            Shop by Brand
          </h1>
        </div>

        {/* Brand Cards Scrolling Section */}
        <div className="relative w-full py-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded border border-gray-50 overflow-hidden">
          {/* Scrolling Animation */}
          <div className="flex space-x-6 animate-scroll">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[180px] md:w-[220px] text-center p-6 text-lg md:text-xl text-gray-800 font-semibold bg-white rounded hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-orange-500 hover:text-orange-500 border border-gray-200"
              >
                {brand}
              </div>
            ))}
          </div>

          {/* Gradient Overlay for Smooth Scrolling Effect */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent"></div>
        </div>

        {/* Custom Animation */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            display: flex;
            animation: scroll 20s linear infinite;
            will-change: transform;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </NMContainer>
  );
};

export default Brand;
