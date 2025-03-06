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

// "use server";

// import { cookies } from "next/headers";

// interface CreateTransactionPayload {
//   productId: string;
// }

// export const createTransaction = async (productId: string) => {
//   try {
//     const token = cookies().get("accessToken")?.value;

//     if (!token) {
//       throw new Error("Unauthorized! Please login first.");
//     }

//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/transactions`, {
//       method: "POST",
//       headers: {
//         Authorization: token,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ productId }),  // Just sending productId
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data.message || "Failed to create transaction");
//     }

//     return data;  // This should have { success, message, data: { paymentUrl } }
//   } catch (error: any) {
//     throw new Error(error.message || "Something went wrong while creating transaction");
//   }
// };
