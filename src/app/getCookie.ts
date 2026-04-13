"use server";

import { cookies } from "next/headers";

export async function getCookie(
  name: string,
  defaultValue: string,
): Promise<string> {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value ?? defaultValue;
}
