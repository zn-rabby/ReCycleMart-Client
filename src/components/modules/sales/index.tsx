"use client";

import { NMTable } from "@/components/ui/core/NMTable/index";
import { IMeta } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import TablePagination from "@/components/ui/core/NMTable/TablePagination";
import { ITransactions } from "@/types/transactions";
import { updateStatus } from "@/services/Transactions";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const ManageSales = ({
  products,
  meta,
}: {
  products: ITransactions[];
  meta: IMeta;
}) => {
  const [transactions] = useState(products || []);

  // const handleStatusUpdate = async (transactionId: string, newStatus: string) => {
  //   try {
  //     const res = await updateStatus(transactionId, { status: newStatus });

  //     if (res.success) {
  //       toast.success(res.message);
  //       setTransactions((prev) =>
  //         prev.map((tx) =>
  //           tx._id === transactionId
  //             ? { ...tx, itemID: { ...tx.itemID, status: newStatus } }
  //             : tx
  //         )
  //       );
  //     } else {
  //       toast.error(res.message);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     toast.error("An error occurred while updating the status.");
  //   }
  // };


  const handleUpdateOrderStatus = async (id: string, status: string) => {
    console.log(id, status);
    try {
      const response = await updateStatus(id, { status });
      if (response?.success) {
        toast.success("Order status updated successfully");
        // router.push("/products");
      } else {
        toast.error(response.error[0]?.message);
      }
    } catch {
      toast.error("Something went wrong!");
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
    // {
    //   accessorKey: "itemID",
    //   header: "Status Update",
    //   cell: ({ row }) => {
    //     const transactionId = row.original._id;
    //     const status = row.original.itemID?.status || "pending";

    //     return (
    //       <div className="flex items-center space-x-2">
    //         <div
    //           className={clsx(
    //             "px-3 py-1 text-sm font-medium rounded-md w-24 text-center",
    //             status === "pending" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
    //           )}
    //         >
    //           {status}
    //         </div>
    //         <DropdownMenu>
    //           <DropdownMenuTrigger asChild>
    //             <Button variant="outline" size="sm">
    //               Update Status
    //             </Button>
    //           </DropdownMenuTrigger>
    //           <DropdownMenuContent>
    //             <DropdownMenuItem
    //               onClick={() => handleStatusUpdate(transactionId, "pending")}
    //             >
    //               Set to Pending
    //             </DropdownMenuItem>
    //             <DropdownMenuItem
    //               onClick={() => handleStatusUpdate(transactionId, "completed")}
    //             >
    //               Set to Completed
    //             </DropdownMenuItem>
    //           </DropdownMenuContent>
    //         </DropdownMenu>
    //       </div>
    //     );
    //   },
    // },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const order = row.original;

        const handleStatusChange = (newStatus: string) => {
          handleUpdateOrderStatus(order._id, newStatus);
        };
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <Button variant="outline" className=" p-4 capitalize">
                {order.status}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => handleStatusChange("pending")}
                className="cursor-pointer"
              >
                Pending
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleStatusChange("completed")}
                className="cursor-pointer"
              >
                Completed
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between p-3">
        <h1 className="text-xl font-bold">Manage Transactions</h1>
      </div>
      <NMTable columns={columns} data={transactions} />
      <div className="flex justify-end p-3">
      <TablePagination totalPage={meta?.totalPage} />
      </div>
    </div>
  );
};

export default ManageSales;