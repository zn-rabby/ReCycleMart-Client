import ManageProducts from "@/components/modules/listing";
import { getAllProducts } from "@/services/Product";



const ListingPage =  async ({
    searchParams,
  }: {
    searchParams: Promise<{ page: string }>;
  }) => {
    const { page } = await searchParams;

    const { data, meta } = await getAllProducts(page, "3");
  return (
    <div className=" bg-gray-100">
     
      <ManageProducts products={data} meta={meta}></ManageProducts>
     
    </div>
  );
};

export default ListingPage;