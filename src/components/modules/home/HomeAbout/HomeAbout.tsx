import Link from "next/link";
import {
  ArrowRight,
  ShoppingCart,
  Tag,
  CheckCircle,
  Shield,
  Smile,
} from "lucide-react";

const HomeAbout = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* About ReCycleMart */}
        <div className="mb-12">
          <h2 className="lg:text-3xl text-2xl font-bold text-gray-800">
            About ReCycleMart
          </h2>
        </div>

        {/* Sell Your Used Items & Find Great Deals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Sell Your Used Items */}
          <div className="bg-gradient-to-r from-[#FF5E01] to-[#D94F01] rounded-lg p-8 text-white text-center relative overflow-hidden">
            {/* Icon */}
            <ShoppingCart className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Sell Your Used Items</h3>
            <p className="text-lg mb-6">
              Turn your old or unused products into cash quickly. List your
              items now and connect with buyers instantly!
            </p>

            {/* Key Benefits */}
            <div className="text-left mb-6">
              <div className="flex items-center mb-3">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Fast and easy listing process</span>
              </div>
              <div className="flex items-center mb-3">
                <Shield className="w-5 h-5 mr-2" />
                <span>Secure transactions</span>
              </div>
              <div className="flex items-center">
                <Smile className="w-5 h-5 mr-2" />
                <span>Thousands of happy sellers</span>
              </div>
            </div>

            {/* Call-to-Action Button */}
            <Link
              href="/dashboard/listing"
              className="inline-flex items-center bg-white text-[#FF5E01] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Sell Now <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

            {/* Subtle Animation */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-white/5 rounded-full"></div>
          </div>

          {/* Find Great Deals */}
          <div className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] rounded-lg p-8 text-white text-center relative overflow-hidden">
            {/* Icon */}
            <Tag className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Find Great Deals on Pre-Owned Items
            </h3>
            <p className="text-lg mb-6">
              Discover high-quality second-hand products at unbeatable prices.
              Save money while shopping for your favorite items!
            </p>

            {/* Key Benefits */}
            <div className="text-left mb-6">
              <div className="flex items-center mb-3">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Verified product listings</span>
              </div>
              <div className="flex items-center mb-3">
                <Shield className="w-5 h-5 mr-2" />
                <span>Safe and secure shopping</span>
              </div>
              <div className="flex items-center">
                <Smile className="w-5 h-5 mr-2" />
                <span>Thousands of happy buyers</span>
              </div>
            </div>

            {/* Call-to-Action Button */}
            <Link
              href="/products"
              className="inline-flex items-center bg-white text-[#1E3A8A] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Products <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

            {/* Subtle Animation */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-white/5 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
