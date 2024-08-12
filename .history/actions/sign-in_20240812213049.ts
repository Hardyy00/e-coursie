"use server";

import { signIn } from "@/auth";

export const sign_in = async (formData: FormData, signInType: string) => {
  await signIn(signInType, { redirectTo: "/" });
};
