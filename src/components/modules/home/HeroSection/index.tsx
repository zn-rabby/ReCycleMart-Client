import HeroCarousel from "./Carousel/Carousel";
import RightSection from "./RightSection/RightSection";

const HeroSection = () => {
  return (
    <div className="md:mt-34">
      <div className="flex flex-col sm:flex-row justify-between ">
        {/* HeroCarousel - 75% width on larger screens, full width on small screens */}
        <div className="w-full sm:w-3/4 h-[650px]">
          <HeroCarousel />
        </div>

        {/* RightSection - 25% width on larger screens, full width on small screens */}
        <div className="w-full sm:w-1/4 sm:pl-2  sm:mt-0 h-[650px]">
          <RightSection />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
