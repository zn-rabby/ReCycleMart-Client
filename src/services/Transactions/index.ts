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
export const getPurchases = async () => {
  try {
    
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/transactions`,
      {
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

// export const getPurchases = async () => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/transactions/purchases`, {
//       cache: "no-store", // Prevents caching issues
//       headers: { "Content-Type": "application/json" },
//     });

//     if (!res.ok) {
//       throw new Error(`API request failed: ${res.status}`);
//     }

//     return await res.json();
//   } catch (error: any) {
//     console.error("Error fetching purchases:", error.message);
//     return { error: error.message };
//   }
// };

// export const getPurchases = async (page?: string, limit?: string) => {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_API}/transactions/purchases?limit=${limit}&page=${page}`,
//       {
//         next: {
//           tags: ["PURCHASES"],
//         },
//       }
//     );

//     console.log("API Response Status:", res.status); // Log the status code
//     console.log("API Response Headers:", res.headers); // Log the headers

//     const data = await res.json();
//     console.log("API Response Data:", data); // Log the data

//     return data;
//   } catch (error: any) {
//     console.error("API Error:", error.message); // Log the error
//     return Error(error.message);
//   }
// };





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
