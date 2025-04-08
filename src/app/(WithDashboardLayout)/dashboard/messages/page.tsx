export const dynamic = "force-dynamic";

import ManageMessages from "@/components/modules/contact";
import { getAllContacts } from "@/services/Contact";
import { IContact } from "@/types/contact";

export default async function ContactPage() {
  const data = await getAllContacts();

  const message: IContact[] = data.data || [];
  console.log(message, 55);

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Messages Details
      </h2>

      <ManageMessages message={message}></ManageMessages>
    </div>
  );
}
