import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="mt-4">
      <section className="relative w-full h-screen min-h-[500px] max-h-[650px] flex items-center justify-center text-white overflow-hidden">
        {/* Next.js Optimized Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="ReCycleMart marketplace"
            fill
            priority
            className="object-cover object-center"
            quality={100}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/60 to-gray-900/90"></div>

        {/* Content Container */}
        <div className="relative z-10 px-6 sm:px-8 lg:px-4 w-full max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-5 md:space-y-6">
            {/* Headings */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#FF5E01] to-[#FF8C01]">
                ReCycleMart
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-100">
                Marketplace for Buying & Selling Used Items
              </p>
            </div>

            {/* Updated Description */}
            <div className="max-w-2xl mx-auto">
              <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
                The easiest way to buy quality used items at great prices or
                sell your unused products quickly. Join Worldwide most trusted
                second-hand marketplace today.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 w-full sm:w-auto">
              <Link href="/products" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#FF5E01] to-[#FF8C01] hover:from-[#E55601] hover:to-[#E57A01] text-white text-sm sm:text-base font-semibold px-8 py-3 sm:px-10 sm:py-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Browse Items
                </Button>
              </Link>
              <Link href="/dashboard/listing" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-white bg-transparent hover:bg-white/10 text-white text-sm sm:text-base font-semibold px-8 py-3 sm:px-10 sm:py-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Sell Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
