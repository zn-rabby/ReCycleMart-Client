// import HomeBanner from "@/components/modules/home/Banner";
import Brand from "@/components/modules/home/Brand";
import CombinedSection from "@/components/modules/home/CombinedSection/CombinedSection";
import FeaturedProducts from "@/components/modules/home/FeaturedProducts";
import HeroSection from "@/components/modules/home/HeroSection";
import CategorySection from "@/components/modules/home/HeroSection/Category";
import FeaturesSection from "@/components/modules/home/HeroSection/FeaturesSection/FeaturesSection";

const HomePage = async () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeaturesSection></FeaturesSection>
      <CategorySection></CategorySection>
      <FeaturedProducts></FeaturedProducts>
      <Brand></Brand>
      <CombinedSection></CombinedSection>
    </div>
  );
};

export default HomePage;
