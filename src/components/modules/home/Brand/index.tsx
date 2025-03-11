
"use client"
import { brands } from "@/constants/brandName";

const Brand = () => {
  return (
    <div className=" mb-10 container mx-auto w-full">
      <div>
        <h1 className=" lg:text-4xl text-2xl font-bold text-gray-800">
          Shop by Brand
        </h1>
        {/* <p className="text-center lg:text-2xl text-xl text-gray-600 mt-3 mb-10">
          Discover top brands and shop your favorite products
        </p> */}
      </div>

      {/* Brand Cards with Animation */}
      <div className="relative w-full py-8 overflow-hidden">
        <div className="flex space-x-6 animate-scroll">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="border-2 border-gray-300 w-[200px] md:w-[240px] text-center p-4 text-xl md:text-2xl text-gray-700 font-medium rounded-lg shadow-sm hover:shadow-md transition hover:border-[#FF5E01] hover:text-[#FF5E01]"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>

      {/* Add custom animation keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Brand;