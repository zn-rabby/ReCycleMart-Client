import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const banners = [
  {
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1583&q=80",
    title: "Used Cars & Bikes",
    description: "Certified vehicles with complete history reports",
    cta: "View Vehicles",
    cta2: "List Your Vehicle",
  },
  {
    image:
      "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    title: "Pre-Owned Electronics",
    description: "Quality tested gadgets at 40-70% off retail prices",
    cta: "Browse Electronics",
    cta2: "Sell Your Devices",
  },

  {
    image:
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Premium Smartphones",
    description: "Refurbished phones with warranty included",
    cta: "Shop Phones",
    cta2: "Trade In",
  },
  {
    image:
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Sports & Outdoor Gear",
    description: "Quality equipment for your active lifestyle",
    cta: "Explore Gear",
    cta2: "Sell Equipment",
  },
];

const HeroCarousel = () => {
  return (
    <div className="w-full relative bg-gray-100 rounded overflow-hidden shadow">
      <Carousel className="w-full">
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index} className="relative">
              {/* Optimized image container */}
              <div className="relative w-full h-[650px]">
                <Image
                  src={banner.image}
                  alt={`${banner.title} | Second-Hand Marketplace`}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex items-end pb-12 md:pb-16 lg:pb-20">
                <div className="container mx-auto px-6">
                  <div className="max-w-2xl mx-auto text-center text-white space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                      {banner.title}
                    </h1>
                    <p className="text-lg md:text-xl max-w-lg mx-auto leading-snug drop-shadow-md">
                      {banner.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                      <Link href="/products">
                        <Button className="bg-[#FF5E01] hover:bg-[#E05500] text-white font-semibold shadow-lg px-8 py-5 text-base transition-all duration-200 hover:scale-105 cursor-pointer">
                          {banner.cta}
                        </Button>
                      </Link>
                      <Link
                        href={
                          index % 2 === 0
                            ? "/dashboard/listing/add-listing"
                            : "/dashboard/listing/add-listing"
                        }
                      >
                        <Button
                          variant="outline"
                          className="border-2 border-white bg-transparent hover:bg-white hover:text-[#FF5E01] font-semibold px-8 py-5 text-base transition-all duration-200 hover:scale-105 cursor-pointer"
                        >
                          {banner.cta2}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/20 hover:bg-white/40 border-2 border-white text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hidden sm:flex items-center justify-center" />
        <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/20 hover:bg-white/40 border-2 border-white text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hidden sm:flex items-center justify-center" />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
