import ProductBuyDetails from "@/components/modules/products/productBuyDetails/productBuyDetails";
import NMContainer from "@/components/ui/core/NMContainer";
import { getSingleProduct } from "@/services/Product";

const ProductBuyPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const { data: product } = await getSingleProduct(productId);
  console.log(product, productId, "poduct buy");

  return (
    <NMContainer className="md:mt-40">
      <ProductBuyDetails product={product} />
    </NMContainer>
  );
};

export default ProductBuyPage;
