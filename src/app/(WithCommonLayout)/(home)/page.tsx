// import AllBlogs from "@/components/modules/Blog";
import Brand from "@/components/modules/home/Brand";
import CombinedSection from "@/components/modules/home/CombinedSection/CombinedSection";
import FeaturedProducts from "@/components/modules/home/FeaturedProducts";
// import HeroSection from "@/components/modules/home/HeroSection";
import CategorySection from "@/components/modules/home/HeroSection/Category";
import FeaturesSection from "@/components/modules/home/HeroSection/FeaturesSection/FeaturesSection";
import Hero from "@/components/modules/home/HeroSection/Hero/inex";
import HomeAbout from "@/components/modules/home/HomeAbout/HomeAbout";
import Newsletter from "@/components/modules/home/Newsletter/Newsletter";

const HomePage = async () => {
  return (
    <div>
      {/* <HeroSection></HeroSection> */}
      <Hero></Hero>
      <FeaturesSection></FeaturesSection>

      <CategorySection></CategorySection>
      <FeaturedProducts></FeaturedProducts>
      {/* <AllBlogs></AllBlogs> */}
      <Brand></Brand>
      <HomeAbout></HomeAbout>
      <CombinedSection></CombinedSection>
      <Newsletter></Newsletter>
    </div>
  );
};

export default HomePage;
