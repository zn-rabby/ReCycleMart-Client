
import UpdateListingForm from "@/components/modules/listing/UpdateListingForm";
import { getSingleProduct } from "@/services/Product";

const UpdateProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const { data: product } = await getSingleProduct(productId);
    console.log(product);

  return (
    <div className="flex justify-center items-center">
      <UpdateListingForm product={product} />
    </div>
  );
};

export default UpdateProductPage;