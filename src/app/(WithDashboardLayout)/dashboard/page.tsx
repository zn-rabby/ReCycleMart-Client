export const dynamic = "force-dynamic";

import SalesAnalytics from "@/components/modules/dashboard/sidebar/dashboard/Analytics/SalesAnalytics";
import DashboardOverview from "@/components/modules/dashboard/sidebar/dashboard/page";
import {
  getMonthlySales,
  getTotalProductsAdded,
  getTotalPurchases,
  getTotalSales,
} from "@/services/Analytics";
import { Fragment } from "react";

export default async function DashboardHomePage() {
  const { data: totalProductsAdded } = await getTotalProductsAdded();
  const { data: totalPurchases } = await getTotalPurchases();
  const { data: totalSales } = await getTotalSales();
  const { data: analyticsData } = await getMonthlySales();
  return (
    <Fragment>
      <DashboardOverview
        totalProductsAdded={totalProductsAdded}
        totalPurchases={totalPurchases}
        totalSales={totalSales}
      />

      <div className="px-4">
        <SalesAnalytics data={analyticsData} />
      </div>
    </Fragment>
  );
}
