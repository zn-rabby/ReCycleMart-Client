import NMContainer from "@/components/ui/core/NMContainer";
import { ShoppingCart, ShieldCheck, Truck,  Smile } from "lucide-react";

const CombinedSection = () => {
  return (
    <NMContainer>
        <div className="bg-white py-16">
      <div className="mx-auto ">
        {/* Key Features Section */}
        <div className="mb-16">
          <h2 className="lg:text-4xl text-2xl font-bold text-gray-800">Why Choose Us?</h2>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Feature 1: Easy Shopping */}
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <ShoppingCart className="w-12 h-12 mx-auto text-[#FF5E01]" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Easy Shopping
            </h3>
            <p className="text-gray-600 mt-2">
              Browse, select, and purchase your favorite products with just a few clicks.
            </p>
          </div>

          {/* Feature 2: Secure Payments */}
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <ShieldCheck className="w-12 h-12 mx-auto text-[#FF5E01]" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Secure Payments
            </h3>
            <p className="text-gray-600 mt-2">
              Enjoy safe and secure transactions with our trusted payment gateways.
            </p>
          </div>

          {/* Feature 3: Fast Delivery */}
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <Truck className="w-12 h-12 mx-auto text-[#FF5E01]" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Fast Delivery
            </h3>
            <p className="text-gray-600 mt-2">
              Get your products delivered to your doorstep in record time.
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-[#FF5E01] to-[#D94F01] rounded-lg p-8 text-white text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Success in Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1: Happy Customers */}
            <div>
              <Smile className="w-12 h-12 mx-auto" />
              <h3 className="text-4xl font-bold mt-4">500k+</h3>
              <p className="text-xl mt-2">Happy Customers</p>
            </div>

            {/* Stat 2: Products Sold */}
            <div>
              <ShoppingCart className="w-12 h-12 mx-auto" />
              <h3 className="text-4xl font-bold mt-4">1M+</h3>
              <p className="text-xl mt-2">Products Sold</p>
            </div>

            {/* Stat 3: Delivery Partners */}
            <div>
              <Truck className="w-12 h-12 mx-auto" />
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