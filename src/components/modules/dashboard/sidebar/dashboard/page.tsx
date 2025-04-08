import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PlusIcon, ShoppingCartIcon, TrendingUpIcon } from "lucide-react";

export default function DashboardOverview({
  totalProductsAdded,
  totalPurchases,
  totalSales,
}: {
  totalProductsAdded: number;
  totalPurchases: number;
  totalSales: number;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
      {/* total products added card */}
      <Card className="bg-white shadow-lg rounded-lg border border-gray-200">
        <CardHeader className="flex justify-between items-center">
          <div className="text-xl font-bold">Total Products Added</div>
          <PlusIcon className="h-6 w-6 text-blue-500" />
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-3xl font-bold text-gray-800">
            {totalProductsAdded}
          </div>
        </CardContent>
      </Card>

      {/* total purchases card */}
      <Card className="bg-white shadow-lg rounded-lg border border-gray-200">
        <CardHeader className="flex justify-between items-center">
          <div className="text-xl font-bold">Total Purchases</div>
          <ShoppingCartIcon className="h-6 w-6 text-green-500" />
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-3xl font-bold text-gray-800">
            {totalPurchases}
          </div>
        </CardContent>
      </Card>

      {/* total sales card */}
      <Card className="bg-white shadow-lg rounded-lg border border-gray-200">
        <CardHeader className="flex justify-between items-center">
          <div className="text-xl font-bold">Total Sales</div>
          <TrendingUpIcon className="h-6 w-6 text-red-500" />
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-3xl font-bold text-gray-800">৳ {totalSales}</div>
        </CardContent>
      </Card>
    </div>
  );
}
