import ProductDetails from "@/components/modules/products/productDetails";
import NMContainer from "@/components/ui/core/NMContainer";
import { getSingleProduct } from "@/services/Product";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const { data: product } = await getSingleProduct(productId);
  // console.log(product, "poduct",params,productId)

  return (
    <NMContainer className="mt-40">
      <ProductDetails product={product} />
    </NMContainer>
  );
};

export default ProductDetailsPage;
