/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { NMTable } from "@/components/ui/core/NMTable/index";
import { IMeta, IProduct } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Eye, Plus, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import TablePagination from "@/components/ui/core/NMTable/TablePagination";
import Link from "next/link";
import { toast } from "sonner";
import { deleteProduct } from "@/services/Product";

const ManageProducts = ({
  products,
  meta,
}: {
  products: IProduct[];
  meta: IMeta;
}) => {
  const router = useRouter();
console.log("products page",products)

  const handleView = (product: IProduct) => {
    console.log("Viewing product:", product);
  };

  const handleDelete = async(productId: string) => {
    console.log("Deleting product with ID:", productId);
    try {
      if (productId) {
        const res = await deleteProduct(productId);
        console.log(res);
        if (res.success) {
          toast.success(res.message);
        } else {
          toast.error(res.message);
        }
      }
    } catch (err: any) {
      console.error(err?.message);
    }
  };

  const columns: ColumnDef<IProduct>[] = [
    {
      accessorKey: "name",
      header: "Product Name",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.images[0]}
            alt={row.original.name}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => <span>{row.original.title}</span>,
    },
  
    {
      accessorKey: "stock",
      header: "Stock",
      cell: ({ row }) => <span>{row.original.stock}</span>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => <span>{row.original.status}</span>,
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => <span>$ {row.original.price.toFixed(2)}</span>,
    },
 
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
      <Link href={`/products/${row.original._id}`} passHref>
  <button
    className="text-gray-500 hover:text-blue-500"
    title="View"
    onClick={() => handleView(row.original)}
  >
    <Eye className="w-5 h-5" />
  </button>
</Link>
          <button
            className="text-gray-500 hover:text-green-500"
            title="Edit"
            onClick={() =>
              router.push(
                `/dashboard/listing/updating-listing/${row.original._id}`
              )
            }
          >
            <Edit className="w-5 h-5" />
          </button>

          <button
            className="text-gray-500 hover:text-red-500"
            title="Delete"
            onClick={() => handleDelete(row.original._id)}
          >
            <Trash className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between p-3">
        <h1 className="text-xl font-bold">Manage Listing</h1>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => router.push("/dashboard/listing/add-listing")}
            size="sm"
          >
            Add Listing <Plus />
          </Button>
        </div>
      </div>
      <NMTable columns={columns} data={products || []} />
      <div className="flex justify-end p-3">
      <TablePagination totalPage={meta?.totalPage} />
      </div>
    </div>
  );
};

export default ManageProducts;