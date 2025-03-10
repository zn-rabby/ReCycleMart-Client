import ManagePurses from "@/components/modules/purses";
import { getPurchases } from "@/services/Transactions";

const PurchaseHistory = async ({
    searchParams,
  }: {
    searchParams: Promise<{ page: string }>;
  }) => {
 const { page } = await searchParams;
 
     const { data, meta } = await getPurchases(page, "3");
     

  return (
    <div className="bg-gray-100">
      <h2>Purchase History</h2>
      {/* Ensure ManagePurses is compatible with the received data */}
      <ManagePurses  products={data} meta={meta} />
    </div>
  );
};

export default PurchaseHistory;
