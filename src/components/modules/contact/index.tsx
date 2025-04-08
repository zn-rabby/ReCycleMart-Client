"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Card } from "@/components/ui/card";
import { IContact } from "@/types/contact";
import { deleteContactById } from "@/services/Contact";

export default function ManageMessages({ message }: { message: IContact[] }) {
  const [data, setData] = React.useState<IContact[]>(message);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [contactToDelete, setContactToDelete] = React.useState<string | null>(
    null
  );

  const handleDeleteContact = async (id: string) => {
    setIsDeleting(true);
    try {
      const response = await deleteContactById(id);
      if (response?.success) {
        setData((prevData) => prevData.filter((contact) => contact._id !== id));
        toast.success("Message deleted successfully");
      } else {
        toast.error(response?.message || "Failed to delete message");
      }
    } catch (error) {
      toast.error("Something went wrong while deleting the message");
      console.error("Delete error:", error);
    } finally {
      setIsDeleting(false);
      setDeleteDialogOpen(false);
      setContactToDelete(null);
    }
  };

  const confirmDelete = (id: string) => {
    setContactToDelete(id);
    setDeleteDialogOpen(true);
  };

  const columns: ColumnDef<IContact>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <div className="font-medium capitalize">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <a
          href={`mailto:${row.getValue("email")}`}
          className="text-sm text-blue-600 hover:underline dark:text-blue-400 transition-colors"
        >
          {row.getValue("email")}
        </a>
      ),
    },
    {
      accessorKey: "message",
      header: "Message",
      cell: ({ row }) => (
        <div className="text-sm line-clamp-2 dark:text-gray-300">
          {row.getValue("message")}
        </div>
      ),
    },
    {
      id: "actions",
      header: "Actions", // Added header for actions column
      enableHiding: false,
      cell: ({ row }) => {
        const contact = row.original;

        return (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => confirmDelete(contact._id)}
            className="h-8 text-red-600 hover:bg-red-50 hover:text-red-700 dark:hover:bg-gray-700 dark:text-red-400"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    initialState: {
      pagination: {
        pageSize: 8,
      },
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full space-y-6">
      {/* Header and Filters */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Input
          placeholder="Filter messages..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                >
                  Columns <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="dark:bg-gray-800 dark:border-gray-700"
              >
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize dark:hover:bg-gray-700"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      <span className="dark:text-gray-200">{column.id}</span>
                    </DropdownMenuCheckboxItem>
                  ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                >
                  {table.getState().pagination.pageSize} per page{" "}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="dark:bg-gray-800 dark:border-gray-700"
              >
                {[8, 16, 24, 32].map((size) => (
                  <DropdownMenuItem
                    key={size}
                    className="dark:hover:bg-gray-700"
                    onClick={() => table.setPageSize(size)}
                  >
                    <span className="dark:text-gray-200">{size} per page</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Table Card */}
      <Card className="border dark:border-gray-700 overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50 dark:bg-gray-800">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="dark:border-gray-700">
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="dark:text-gray-200 py-3 px-4"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="dark:text-gray-300 py-3 px-4"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center dark:text-gray-300 py-6"
                >
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <p>No messages found</p>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        table.resetColumnFilters();
                        table.resetSorting();
                      }}
                      className="text-blue-600 dark:text-blue-400"
                    >
                      Clear filters
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground dark:text-gray-400">
          Showing{" "}
          <span className="font-medium">
            {table.getState().pagination.pageIndex *
              table.getState().pagination.pageSize +
              1}
            -
            {Math.min(
              (table.getState().pagination.pageIndex + 1) *
                table.getState().pagination.pageSize,
              data.length
            )}
          </span>{" "}
          of <span className="font-medium">{data.length}</span> messages
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          >
            Previous
          </Button>
          <div className="flex items-center justify-center w-10 h-9 text-sm font-medium border rounded-md dark:border-gray-700">
            {table.getState().pagination.pageIndex + 1}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          >
            Next
          </Button>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent className="dark:bg-gray-800 dark:border-gray-700 max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="dark:text-white">
              Delete Message
            </AlertDialogTitle>
            <AlertDialogDescription className="dark:text-gray-300">
              This will permanently delete this message. This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="dark:border-gray-600 dark:text-white dark:hover:bg-gray-700">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() =>
                contactToDelete && handleDeleteContact(contactToDelete)
              }
              className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800"
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
