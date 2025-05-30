import ManagePurses from "@/components/modules/purses";
import { getPurchases } from "@/services/Transactions";

const PurchaseHistory = async ({
    searchParams,
  }: {
    searchParams: Promise<{ page: string }>;
  }) => {
 const { page } = await searchParams;
     const { data, meta } = await getPurchases(page, "8");
    //  const products = data?.result
     console.log(data,"purses")
  return (
    <div className="bg-gray-50">
      <ManagePurses  products={data} meta={meta} />
    </div>
  );
};

export default PurchaseHistory;
