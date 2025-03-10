"use server";


import { ITransactions } from "@/types/transactions";
import { cookies } from "next/headers";

export const createTransactions = async (order: ITransactions) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/transactions`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};


// get all Track Purchases
export const getPurchases = async (page?: string, limit?: string) => {
  try {
    
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/transactions/purchases?limit=${limit}&page=${page}`,
      {
        method: "GET",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        next: {
          tags: ["PURCHASES"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
