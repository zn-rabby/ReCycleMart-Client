/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const addNewsletter = async (newsletterData: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/newsletters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newsletterData),
    });
    revalidateTag("NEWSLETTER");

    const data = await res.json();

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getAllNewsletters = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/newsletters`,
      {
        next: {
          tags: ["NEWSLETTER"],
        },
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );

    const data = await response.json();

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteNewsletterById = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/newsletters/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    revalidateTag("NEWSLETTER");
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
