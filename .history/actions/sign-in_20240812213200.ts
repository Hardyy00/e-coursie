"use server";

import { signIn } from "@/auth";

export const sign_in = async (signInType: string, formData: FormData) => {
  await signIn(signInType, { redirectTo: "/" });
};
