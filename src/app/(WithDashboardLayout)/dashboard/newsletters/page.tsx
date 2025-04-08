export const dynamic = "force-dynamic";

import ManageNewslatters from "@/components/modules/messages";
import { getAllNewsletters } from "@/services/Newsletter";
import { INewsletters } from "@/types/contact";

export default async function NewsPage() {
  const data = await getAllNewsletters();

  const message: INewsletters[] = data.data || [];
  console.log(message, 55);

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Messages Details
      </h2>

      <ManageNewslatters message={message}></ManageNewslatters>
    </div>
  );
}
