import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

import secondHandBanner1 from "@/assets/banner-4.jpg";
import secondHandBanner2 from "@/assets/banner-3.jpg";
import secondHandBanner3 from "@/assets/banner-2.jpg";

const banners = [
  {
    image: secondHandBanner1,
    title: "Discover Amazing Deals on Second-Hand Products!",
    description:
      "Find great deals on pre-loved items, from electronics to fashion and more. Save money and reduce waste by buying second-hand.",
  },
  {
    image: secondHandBanner2,
    title: "Shop Smart, Save More!",
    description: "Get high-quality second-hand products at unbeatable prices.",
  },
  {
    image: secondHandBanner3,
    title: "Sustainability Starts Here!",
    description:
      "Reduce waste and support a circular economy with second-hand shopping.",
  },
];

const HeroCarousel = () => {
  return (
    <div
      className="container mx-auto sm:p-2 md:p-0 relative"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Full-Width Carousel Section */}
      <div className="relative w-full">
        <Carousel>
          <CarouselContent>
            {banners.map((banner, index) => (
              <CarouselItem key={index} className="w-full">
                <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
                  {/* Background Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={banner.image}
                      alt={`Second-hand products banner ${index + 1}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
                    <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
                      {banner.title}
                    </h1>
                    <p className="my-3 text-sm sm:text-lg">
                      {banner.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href="/products" passHref>
                        <Button className="rounded-full bg-[#FF5E01] hover:bg-[#D94F01] text-white">
                          Shop Now
                        </Button>
                      </Link>
                      <Link href="/dashboard/listing" passHref>
                        <Button
                          className="rounded-full text-orange-500"
                          variant="outline"
                        >
                          Sell Your Items
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroCarousel;
