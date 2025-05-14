"use server";
import { createClient } from "@/lib/server";
import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const signup = async (prevState: any, formData: FormData) => {
  const signupData = {
    email: formData.get("email") ?? "",
    password: formData.get("password") ?? "",
  };
  const errors = {
    message: "",
  };

  if (
    !signupData.email ||
    !(signupData.email as string).includes("@") ||
    !signupData.password
  ) {
    errors.message = "Email and password are required.";
    return errors;
  }
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email: signupData.email as string,
    password: signupData.password as string,
  });
  if (error) {
    errors.message = error.message;
  } else {
    redirect("/");
  }
  return errors;
};
