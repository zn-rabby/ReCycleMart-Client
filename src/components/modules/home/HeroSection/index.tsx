import { Button } from "@/components/ui/button";
import Image from "next/image";
import secondHandBanner from "@/assets/banner.jpg"; // Update the image import

const HeroSection = () => {
  return (
    <div className="container mx-auto border-2 border-white rounded-3xl md:mt-10 p-4 sm:p-6">
      {/* Grid for layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        

        {/* Text and buttons section */}
        <div className="order-2 sm:order-2 text-center sm:text-left pl-0 sm:pl-12">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight sm:leading-normal text-[#FF5E01]">
            Discover Amazing Deals on <br /> Second-Hand Products!
          </h1>
          <p className="my-3 text-sm sm:text-base text-gray-600">
            Find great deals on pre-loved items, from electronics to fashion and
            more. Save money and reduce waste by buying second-hand.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
            <Button className="rounded-full bg-[#FF5E01] hover:bg-[#D94F01] text-white">Shop Now</Button>
            <Button className="rounded-full " variant="outline">
              Sell Your Items
            </Button>
          </div>
        </div>
        {/* Image section - appears first on small screens */}
        <div className="order-1 sm:order-1 flex items-center justify-center">
          <Image
            src={secondHandBanner}
            alt="Second-hand products banner"
            className="rounded-lg"
            priority // Ensures the image loads quickly
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;