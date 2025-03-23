import AllProducts from "@/components/modules/products";
import NMContainer from "@/components/ui/core/NMContainer";
import { getAllProducts } from "@/services/Product";
import pattern from "@/assets/about-1.jpg";

const AllProductsPage = async () => {
  const { data: products } = await getAllProducts();

  return (
    <NMContainer className="md:mt-32">
      {/* Hero Section */}
      <div
        className="relative w-full h-96 rounded-lg text-white text-3xl font-bold flex items-center justify-center"
        style={{
          backgroundImage: `url(${pattern.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold">
            All Product <span className="text-[#FF5E01]">ReCycleMart</span>
          </h1>
          <p className="text-lg font-light italic mt-4">
            Your trusted platform for buying and selling high-quality
            second-hand products.
          </p>
        </div>
      </div>

      <AllProducts products={products} />
    </NMContainer>
  );
};

export default AllProductsPage;
