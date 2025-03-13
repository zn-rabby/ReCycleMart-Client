import ManageProducts from "@/components/modules/listing";
import {  getAllProductsByUser } from "@/services/Product";

const ListingPage =  async ({
    searchParams,
  }: {
    searchParams: Promise<{ page: string }>;
  }) => {
    const { page } = await searchParams;

    const { data, meta } = await getAllProductsByUser(page, "8");
    console.log("dd",data)
  return (
    <div className="bg-gray-50">
     
      <ManageProducts products={data} meta={meta}></ManageProducts>
     
    </div>
  );
};

export default ListingPage;