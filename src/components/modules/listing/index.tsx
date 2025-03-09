"use client";

import { NMTable } from "@/components/ui/core/NMTable/index";
import { IMeta, IProduct } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Eye, Plus, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import DiscountModal from "./DiscountModal";
import TablePagination from "@/components/ui/core/NMTable/TablePagination";
import Link from "next/link";

const ManageProducts = ({
  products,
  meta,
}: {
  products: IProduct[];
  meta: IMeta;
}) => {
  const router = useRouter();
//   const [selectedIds, setSelectedIds] = useState<string[] | []>([]);

  const handleView = (product: IProduct) => {
    console.log("Viewing product:", product);
  };

  const handleDelete = (productId: string) => {
    console.log("Deleting product with ID:", productId);
  };

  const columns: ColumnDef<IProduct>[] = [
    // {
    //   id: "select",
    //   header: ({ table }) => (
    //     <Checkbox
    //       checked={
    //         table.getIsAllPageRowsSelected() ||
    //         (table.getIsSomePageRowsSelected() && "indeterminate")
    //       }
    //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //       aria-label="Select all"
    //     />
    //   ),
    //   cell: ({ row }) => (
    //     <Checkbox
    //       checked={row.getIsSelected()}
    //       onCheckedChange={(value) => {
    //         if (value) {
    //           setSelectedIds((prev) => [...prev, row.original._id]);
    //         } else {
    //           setSelectedIds(
    //             selectedIds.filter((id) => id !== row.original._id)
    //           );
    //         }
    //         row.toggleSelected(!!value);
    //       }}
    //       aria-label="Select row"
    //     />
    //   ),
    //   enableSorting: false,
    //   enableHiding: false,
    // },

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
    // {
    //   accessorKey: "brand",
    //   header: "Brand",
    //   cell: ({ row }) => <span>{row}</span>,
    // },
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
    // {
    //   accessorKey: "offerPrice",
    //   header: "Ofter Price",
    //   cell: ({ row }) => (
    //     <span>
    //       $ {row.original.price ? row.original.price.toFixed(2) : "0"}
    //     </span>
    //   ),
    // },
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
                `/user/shop/products/update-product/${row.original._id}`
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
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Manage Listing</h1>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => router.push("/user/shop/products/add-product")}
            size="sm"
          >
            Add Listing <Plus />
          </Button>
          {/* <DiscountModal
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
          /> */}
        </div>
      </div>
      <NMTable columns={columns} data={products || []} />
      <TablePagination totalPage={meta?.totalPage} />
    </div>
  );
};

export default ManageProducts;