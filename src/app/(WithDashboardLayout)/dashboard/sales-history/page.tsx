import ManageSales from "@/components/modules/sales";
import {  getSales } from "@/services/Transactions";

const SelesHistory = async ({
    searchParams,
  }: {
    searchParams: Promise<{ page: string }>;
  }) => {
 const { page } = await searchParams;
 
 const { data, meta } = await getSales(page, "8");
//  const products = data?.result
  return (
    <div className="bg-gray-50 p-1">
      <ManageSales  products={data} meta={meta} />
    </div>
  );
};

export default SelesHistory;
