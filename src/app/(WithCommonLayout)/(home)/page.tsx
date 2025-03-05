import HeroSection from "@/components/modules/home/HeroSection";
import CategorySection from "@/components/modules/home/HeroSection/Category";
import { Button } from "@/components/ui/button";

const HomePage = async () => {
    return (
      <div>
        <HeroSection></HeroSection>
        <CategorySection></CategorySection>
        <h2>This is home pages</h2>
        <Button>Hello</Button>
      </div>
    );
  };
  
  export default HomePage;