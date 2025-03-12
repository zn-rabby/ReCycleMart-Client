import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react"; // Changed from Check to XCircle
import Link from "next/link";

const FailedPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center">
          {/* Icon with red background */}
          <div style={{ backgroundColor: "rgba(255, 94, 1, 0.1)" }} className="p-3 rounded-full mb-5">
            <XCircle style={{ color: "#FF5E01" }} className="size-40" /> {/* Changed to XCircle */}
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Payment Failed
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Your payment could not be processed. Please check your payment details
            and try again, or contact support for assistance.
          </p>

          {/* Button with custom color combination */}
          <Link href="/products" legacyBehavior>
            <Button className="bg-[#FF5E01] hover:bg-[#D94F01] text-white">
              Try Again
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FailedPage;