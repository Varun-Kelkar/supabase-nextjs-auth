"use server";
import { createClient } from "@/lib/server";

export const logout = async () => {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error signing out:", error);
  }
};
