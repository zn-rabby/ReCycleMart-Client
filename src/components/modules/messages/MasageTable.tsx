"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { INewsletters } from "@/types/contact";
// import { Contact } from "@/types/type";

interface ContactTableProps {
  contact: INewsletters[];
}

const MessageTable = ({ contact }: ContactTableProps) => {
  // Safeguard: Ensure `contact` is an array
  if (!Array.isArray(contact)) {
    console.error("Expected 'contact' to be an array, but got:", contact);
    return <div>No contact data available.</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-[#39B9B7]">
          <TableHead className="text-white font-semibold">Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contact.map((cont) => (
          <TableRow
            key={cont._id}
            className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <TableCell className="text-gray-700 dark:text-gray-200">
              {cont.email}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MessageTable;
