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
        <div className="relative w-full py-8 overflow-hidden bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="flex space-x-6 animate-scroll">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="border border-gray-300 w-[180px] md:w-[220px] text-center p-4 text-lg md:text-xl text-gray-800 font-semibold bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-md hover:shadow-lg transition hover:border-orange-500 hover:text-orange-500"
              >
                {brand}
              </div>
            ))}
          </div>
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
