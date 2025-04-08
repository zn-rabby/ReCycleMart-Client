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
import { IContact } from "@/types/contact";
// import { Contact } from "@/types/type";

interface ContactTableProps {
  contact: IContact[];
}

const ContactTable = ({ contact }: ContactTableProps) => {
  // Safeguard: Ensure `contact` is an array
  if (!Array.isArray(contact)) {
    console.error("Expected 'contact' to be an array, but got:", contact);
    return <div>No contact data available.</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-[#39B9B7]">
          <TableHead className="text-white font-semibold">User Name</TableHead>
          <TableHead className="text-white font-semibold">User Email</TableHead>
          <TableHead className="text-white font-semibold">Message</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contact.map((cont) => (
          <TableRow
            key={cont._id}
            className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <TableCell className="font-medium text-gray-800 dark:text-gray-100">
              {cont.name}
            </TableCell>
            <TableCell className="text-gray-700 dark:text-gray-200">
              {cont.email}
            </TableCell>
            <TableCell className="text-gray-700 dark:text-gray-200">
              {cont.message}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ContactTable;
