import NMContainer from "@/components/ui/core/NMContainer";
import { ShoppingCart, Truck, Smile } from "lucide-react";

const CombinedSection = () => {
  return (
    <NMContainer>
      <div className="bg-white">
        <div className="mx-auto">
          {/* Key Features Section */}
          <div className="mb-10">
            <h2 className="lg:text-3xl text-2xl font-bold text-gray-800">
              Why Choose Us?
            </h2>
          </div>

          {/* Statistics Section */}
          <div className="bg-gradient-to-r from-[#FF5E01] to-[#D94F01] rounded-lg p-8 text-white text-center mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Success in Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Stat 1: Happy Customers */}
              <div className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors duration-300">
                <Smile className="w-12 h-12 mx-auto text-white" />
                <h3 className="text-4xl font-bold mt-4">500k+</h3>
                <p className="text-xl mt-2">Happy Customers</p>
              </div>

              {/* Stat 2: Products Sold */}
              <div className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors duration-300">
                <ShoppingCart className="w-12 h-12 mx-auto text-white" />
                <h3 className="text-4xl font-bold mt-4">1M+</h3>
                <p className="text-xl mt-2">Products Sold</p>
              </div>

              {/* Stat 3: Delivery Partners */}
              <div className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors duration-300">
                <Truck className="w-12 h-12 mx-auto text-white" />
                <h3 className="text-4xl font-bold mt-4">10k+</h3>
                <p className="text-xl mt-2">Delivery Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NMContainer>
  );
};

export default CombinedSection;
