import AllProducts from "@/components/modules/products";
import NMContainer from "@/components/ui/core/NMContainer"
import { getAllProducts } from "@/services/Product";

const AllProductsPage = async () => {
  const { data: products } = await getAllProducts();

  return (
    <NMContainer>
      <h2 className="text-xl font-bold my-5">Featured Collection </h2>
      
      <AllProducts products={products} />
    </NMContainer>
  );
};

export default AllProductsPage;