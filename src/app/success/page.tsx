import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const SuccessPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center">
          {/* Icon with custom background color */}
          <div style={{ backgroundColor: "rgba(255, 94, 1, 0.1)" }} className="p-3 rounded-full mb-5">
            <Check style={{ color: "#FF5E01" }} className="size-40" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Payment Successful
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Thank you for your purchase! Your payment has been processed
            successfully.
          </p>

          {/* Button with custom color combination */}
          <Link href="/products" legacyBehavior>
            <Button className="bg-[#FF5E01] hover:bg-[#D94F01] text-white">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;