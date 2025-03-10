"use client";

import { NMTable } from "@/components/ui/core/NMTable/index";
import { IMeta } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Eye, Plus, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import TablePagination from "@/components/ui/core/NMTable/TablePagination";
import Link from "next/link";
import { ITransactions } from "@/types/transactions";

const ManagePurses = ({
  products,
  meta,
}: {
  products: ITransactions[];
  meta: IMeta;
}) => {

    console.log("pp",products)
  const router = useRouter();

  const handleView = (transaction: ITransactions) => {
    console.log("Viewing transaction:", transaction);
    // router.push(`/dashboard/transactions/${transaction._id}`);
  };

  const handleDelete = async (transactionId: string) => {
    console.log("Deleting transaction with ID:", transactionId);
    try {
      // Add your delete logic here
      // Example: const res = await deleteTransaction(transactionId);
      // if (res.success) { toast.success(res.message); }
    } catch (err: any) {
      console.error(err?.message);
    }
  };

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
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Manage Transactions</h1>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => router.push("/dashboard/transactions/add")}
            size="sm"
          >
            Add Transaction <Plus />
          </Button>
        </div>
      </div>
      <NMTable columns={columns} data={products || []} />
      <TablePagination totalPage={meta?.totalPage} />
    </div>
  );
};

export default ManagePurses;