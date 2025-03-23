import NMContainer from "@/components/ui/core/NMContainer";
import HeroCarousel from "./Carousel/Carousel";
import RightSection from "./RightSection/RightSection";

const HeroSection = () => {
  return (
    <NMContainer className="md:mt-32">
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        {/* HeroCarousel - 75% width on larger screens, full width on small screens */}
        <div className="w-full sm:w-3/4">
          <HeroCarousel />
        </div>

        {/* RightSection - 25% width on larger screens, full width on small screens */}
        <div className="w-full sm:w-1/4 sm:pl-4 mt-4 sm:mt-0">
          <RightSection />
        </div>
      </div>
    </NMContainer>
  );
};

export default HeroSection;
