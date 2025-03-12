"use client";

import { NMTable } from "@/components/ui/core/NMTable/index";
import { IMeta } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
// import {  Plus } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
import TablePagination from "@/components/ui/core/NMTable/TablePagination";
import { ITransactions } from "@/types/transactions";

const ManagePurses = ({
  products,
  meta,
}: {
  products: ITransactions[];
  meta: IMeta;
}) => {

    // console.log("pp",products)
  // const router = useRouter();

  // const handleView = (transaction: ITransactions) => {
  //   console.log("Viewing transaction:", transaction);
  // };

  // const handleDelete = async (transactionId: string) => {
  //   console.log("Deleting transaction with ID:", transactionId);
  //   try {
  //   } catch (err: any) {
  //     console.error(err?.message);
  //   }
  // };

  const columns: ColumnDef<ITransactions>[] = [
    {
      accessorKey: "transactionId",
      header: "Transaction ID",
      cell: ({ row }) => (
        <div className="font-medium ">{row.getValue("transactionId")}</div>
      ),
    },
    {
      accessorKey: "itemID",
      header: "Product",
      cell: ({ row }) => {
        return (
          <div className="font-medium capitalize">
            {row.original.itemID?.title || "N/A"}
          </div>
        );
      },
    },
    {
      accessorKey: "itemID",
      header: "Price",
      cell: ({ row }) => {
        return (
          <div className="font-medium capitalize">
            {row.original.itemID?.price || "N/A"}
          </div>
        );
      },
    },
   
    {
      accessorKey: "itemID",
      header: "Buyer Name",
      cell: ({ row }) => {
        return (
          <div className="font-medium capitalize">
            {row.original.buyerID?.name || "N/A"}
          </div>
        );
      },
    },
    {
      accessorKey: "itemID",
      header: "Seller Name",
      cell: ({ row }) => {
        return (
          <div className="font-medium capitalize">
            {row.original.sellerID?.name || "N/A"}
          </div>
        );
      },
    },
    {
      accessorKey: "itemID",
      header: "Status",
      cell: ({ row }) => {
        return (
          <div className="font-medium capitalize px-3 py-1 text-sm
           font-medium rounded-md border w-24 bg-green-100 text-center">
            {row.original.itemID?.status || "N/A"}
          </div>
        );
      },
    },

  ];

  return (
    <div>
      <div className="flex items-center justify-between p-3">
        <h1 className="text-xl font-bold">Manage Transactions</h1>
      </div>
      <NMTable columns={columns} data={products || []} />
      <div className="flex justify-end p-3">
      <TablePagination totalPage={meta?.totalPage} />
      </div>
    </div>
  );
};

export default ManagePurses;