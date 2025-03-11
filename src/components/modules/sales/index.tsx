"use client";

import { NMTable } from "@/components/ui/core/NMTable/index";
import { IMeta } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import TablePagination from "@/components/ui/core/NMTable/TablePagination";
import { ITransactions } from "@/types/transactions";
import { updateStatus } from "@/services/Transactions";
import { toast } from "sonner";
import { useState } from "react";
import clsx from "clsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ManageSales = ({
  products,
  meta,
}: {
  products: ITransactions[];
  meta: IMeta;
}) => {
  const router = useRouter();
  const [transactions, setTransactions] = useState(products || []);

  const handleStatusUpdate = async (transactionId: string, newStatus: 'pending' | 'completed') => {
    try {
      const res = await updateStatus(transactionId, { status: newStatus });

      if (res.success) {
        toast.success(res.message);
        setTransactions((prev) =>
          prev.map((tx) =>
            tx._id === transactionId
              ? { ...tx, itemID: { ...tx.itemID, status: newStatus } }
              : tx
          )
        );
      } else {
        toast.error(res.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while updating the status.");
    }
  };

  const columns: ColumnDef<ITransactions>[] = [
    {
      accessorKey: "transactionId",
      header: "Transaction ID",
      cell: ({ row }) => <div className="font-medium">{row.getValue("transactionId")}</div>,
    },
    {
      accessorKey: "itemID",
      header: "Product",
      cell: ({ row }) => (
        <div className="font-medium capitalize">{row.original.itemID?.title || "N/A"}</div>
      ),
    },
    {
      accessorKey: "itemID",
      header: "Price",
      cell: ({ row }) => (
        <div className="font-medium capitalize">{row.original.itemID?.price || "N/A"}</div>
      ),
    },
    {
      accessorKey: "buyerID",
      header: "Buyer Name",
      cell: ({ row }) => (
        <div className="font-medium capitalize">{row.original.buyerID?.name || "N/A"}</div>
      ),
    },
    {
      accessorKey: "sellerID",
      header: "Seller Name",
      cell: ({ row }) => (
        <div className="font-medium capitalize">{row.original.sellerID?.name || "N/A"}</div>
      ),
    },
    {
      accessorKey: "itemID",
      header: "Status Update",
      cell: ({ row }) => {
        const transactionId = row.original._id;
        const status = row.original.itemID?.status || "pending";

        return (
          <div className="flex items-center space-x-2">
            <div
              className={clsx(
                "px-3 py-1 text-sm font-medium rounded-md w-24 text-center",
                status === "pending" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
              )}
            >
              {status}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Update Status
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => handleStatusUpdate(transactionId, "pending")}
                >
                  Set to Pending
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleStatusUpdate(transactionId, "completed")}
                >
                  Set to Completed
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
          <Button onClick={() => router.push("/dashboard/transactions/add")} size="sm">
            Add Transaction <Plus />
          </Button>
        </div>
      </div>
      <NMTable columns={columns} data={transactions} />
      <TablePagination totalPage={meta?.totalPage} />
    </div>
  );
};

export default ManageSales;