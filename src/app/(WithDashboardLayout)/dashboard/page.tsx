import { Button } from "@/components/ui/button";
import { Check, ShoppingCart, Package, History, PlusCircle } from "lucide-react";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Welcome Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full mb-8">
        <div className="flex flex-col items-center">
          <div className="bg-green-100 p-3 rounded-full mb-5">
            <Check className="size-12 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome to Secondhand Marketplace
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Buy and sell pre-loved items with ease. Start exploring or list your
            own products today!
          </p>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl w-full">
        {/* Buy Products */}
        <Link href="/products" legacyBehavior>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex flex-col items-center">
              <ShoppingCart className="size-8 text-blue-500 mb-3" />
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Buy Products
              </h2>
              <p className="text-gray-600 text-center">
                Explore a wide range of secondhand items.
              </p>
            </div>
          </div>
        </Link>

        {/* Sell Products */}
        <Link href="/sell" legacyBehavior>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex flex-col items-center">
              <PlusCircle className="size-8 text-green-500 mb-3" />
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Sell Products
              </h2>
              <p className="text-gray-600 text-center">
                List your pre-loved items for sale.
              </p>
            </div>
          </div>
        </Link>

        {/* My Orders */}
        <Link href="/orders" legacyBehavior>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex flex-col items-center">
              <Package className="size-8 text-purple-500 mb-3" />
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                My Orders
              </h2>
              <p className="text-gray-600 text-center">
                Track your purchases and deliveries.
              </p>
            </div>
          </div>
        </Link>

        {/* Transaction History */}
        <Link href="/history" legacyBehavior>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex flex-col items-center">
              <History className="size-8 text-orange-500 mb-3" />
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Transaction History
              </h2>
              <p className="text-gray-600 text-center">
                View your buy/sell history.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;