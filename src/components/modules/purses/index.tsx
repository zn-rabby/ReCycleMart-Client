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

//   const columns: ColumnDef<ITransactions>[] = [
//     // {
//     //   accessorKey: "transactionId",
//     //   header: "Transaction ID",
//     //   cell: ({ row }) => <span>{row.original.transactionId}</span>,
//     // },
//     // {
//     //   accessorKey: "buyer",
//     //   header: "Buyer",
//     //   cell: ({ row }) => (
//     //     <div className="flex items-center space-x-3">
//     //       <span>{row.original.buyerID.name}</span>
//     //     </div>
//     //   ),
//     // },
//     // {
//     //   accessorKey: "seller",
//     //   header: "Seller",
//     //   cell: ({ row }) => (
//     //     <div className="flex items-center space-x-3">
//     //       <span>{row.original.sellerID.name}</span>
//     //     </div>
//     //   ),
//     // },
//     // {
//     //   accessorKey: "item",
//     //   header: "Item",
//     //   cell: ({ row }) => (
//     //     <div className="flex items-center space-x-3">
//     //       <Image
//     //         src={row.original.itemID.images[0]}
//     //         alt={row.original.itemID.title}
//     //         width={40}
//     //         height={40}
//     //         className="w-8 h-8 rounded-full"
//     //       />
//     //       <span>{row.original.itemID.title}</span>
//     //     </div>
//     //   ),
//     // },
//     // {
//     //   accessorKey: "price",
//     //   header: "Price",
//     //   cell: ({ row }) => <span>$ {row.original.itemID.price.toFixed(2)}</span>,
//     // },
//     // {
//     //   accessorKey: "status",
//     //   header: "Status",
//     //   cell: ({ row }) => <span>{row.original.status}</span>,
//     // },
//     // {
//     //   accessorKey: "createdAt",
//     //   header: "Date",
//     //   cell: ({ row }) => (
//     //     <span>{new Date(row.original.createdAt).toLocaleDateString()}</span>
//     //   ),
//     // },
//     // {
//     //   accessorKey: "action",
//     //   header: "Action",
//     //   cell: ({ row }) => (
//     //     <div className="flex items-center space-x-3">
//     //       <button
//     //         className="text-gray-500 hover:text-blue-500"
//     //         title="View"
//     //         onClick={() => handleView(row.original)}
//     //       >
//     //         <Eye className="w-5 h-5" />
//     //       </button>
//     //       <button
//     //         className="text-gray-500 hover:text-green-500"
//     //         title="Edit"
//     //         onClick={() =>
//     //           router.push(`/dashboard/transactions/edit/${row.original._id}`)
//     //         }
//     //       >
//     //         <Edit className="w-5 h-5" />
//     //       </button>
//     //       <button
//     //         className="text-gray-500 hover:text-red-500"
//     //         title="Delete"
//     //         onClick={() => handleDelete(row.original._id)}
//     //       >
//     //         <Trash className="w-5 h-5" />
//     //       </button>
//     //     </div>
//     //   ),
//     // },
//   ];

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
      {/* <NMTable columns={columns} data={products || []} /> */}
      <TablePagination totalPage={meta?.totalPage} />
    </div>
  );
};

export default ManagePurses;