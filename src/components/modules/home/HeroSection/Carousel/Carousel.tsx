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
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Discover Amazing Second-Hand Deals",
    description: "Quality pre-owned items at 50-80% off retail prices",
    cta: "Shop Now",
    cta2: "Sell Items",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Sustainable Fashion Marketplace",
    description: "Gently used designer clothes at unbelievable prices",
    cta: "Browse Fashion",
    cta2: "Consign",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Certified Pre-Owned Tech",
    description: "Fully tested electronics with warranty protection",
    cta: "View Tech",
    cta2: "Trade In",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Affordable Home Essentials",
    description: "Quality furniture and decor at fraction of retail prices",
    cta: "Shop Home",
    cta2: "Sell Yours",
  },
];

const HeroCarousel = () => {
  return (
    <div className="w-full relative bg-gray-100 rounded overflow-hidden shadow ">
      <Carousel className="w-full">
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index} className="relative">
              {/* Optimized image container */}
              <div className="relative w-full h-[500px] md:h-[600px]">
                <Image
                  src={banner.image}
                  alt={`ReCycleMart - ${banner.title}`}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                  quality={100}
                />
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              </div>

              {/* Modern content layout */}
              <div className="absolute inset-0 flex items-end pb-12 md:pb-16">
                <div className="container mx-auto px-6">
                  <div className="max-w-2xl mx-auto text-center text-white space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                      {banner.title}
                    </h1>
                    <p className="text-lg md:text-xl max-w-lg mx-auto leading-snug drop-shadow-md">
                      {banner.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 mt-6">
                      <Link href="/products">
                        <Button className="bg-[#FF5E01] hover:bg-[#E05500] text-white font-semibold shadow-lg px-8 py-5 text-base transition-all duration-200 hover:scale-105">
                          {banner.cta}
                        </Button>
                      </Link>
                      <Link href={index % 2 === 0 ? "/sell" : "/about"}>
                        <Button
                          variant="outline"
                          className="border-2 border-white bg-transparent hover:bg-white hover:text-[#FF5E01] font-semibold px-8 py-5 text-base transition-all duration-200 hover:scale-105"
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

        {/* Sleek navigation arrows */}
        <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/20 hover:bg-white/40 border-2 border-white text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hidden sm:flex items-center justify-center" />
        <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/20 hover:bg-white/40 border-2 border-white text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hidden sm:flex items-center justify-center" />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
