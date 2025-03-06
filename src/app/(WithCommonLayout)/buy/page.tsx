
import ProductBuyDetails from "@/components/modules/products/productBuyDetails/productBuyDetails";
import ProductDetails from "@/components/modules/products/productDetails";
import NMContainer from "@/components/ui/core/NMContainer";
import { getSingleProduct } from "@/services/Product";


const ProductBuyPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  

  const { data: product } = await getSingleProduct(productId);
  console.log(product, productId,"poduct buy",)

  return (
    <NMContainer>
      
      <ProductBuyDetails product={product} />
    </NMContainer>
  );
};

export default ProductBuyPage;