import { Button } from "@/components/ui/button";
import Image from "next/image";
import secondHandBanner from "@/assets/banner.jpg"; // Update the image import

const HeroSection = () => {
  return (
    <div className="container mx-auto border-2 border-white rounded-3xl mt-10">
      <div className="grid grid-cols-2 gap-4 items-center">
        <div className="pl-12">
          <h1 className="text-4xl font-bold leading-normal">
            Discover Amazing Deals on <br /> Second-Hand Products!
          </h1>
          <p className="my-3">
            Find great deals on pre-loved items, from electronics to fashion and
            more. Save money and reduce waste by buying second-hand.
          </p>

          <Button className="rounded-full mr-2">Shop Now</Button>
          <Button className="rounded-full" variant="outline">
            Sell Your Items
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <Image src={secondHandBanner} alt="Second-hand products banner" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;