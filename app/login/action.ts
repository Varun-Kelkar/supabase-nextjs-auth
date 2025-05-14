"use server";
import { createClient } from "@/lib/server";
import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const login = async (prevState: any, formData: FormData) => {
  const loginData = {
    email: formData.get("email") ?? "",
    password: formData.get("password") ?? "",
  };
  const errors = {
    message: "",
  };

  if (
    !loginData.email ||
    !(loginData.email as string).includes("@") ||
    !loginData.password
  ) {
    errors.message = "Email and password are required.";
    return errors;
  }
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: loginData.email as string,
    password: loginData.password as string,
  });
  if (error) {
    errors.message = error.message;
  } else {
    redirect("/dashboard");
  }
  return errors;
};
