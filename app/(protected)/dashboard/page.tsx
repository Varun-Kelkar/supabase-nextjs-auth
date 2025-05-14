import { createClient } from "@/lib/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return redirect("/login");
  }
  return (
    <div style={{ padding: "2rem" }}>
      <h2>
        Welcome, <strong>{user.email}</strong>
      </h2>
      <div>
        <p>You&apos;ve had a 🎉 Successful Login!</p>
      </div>
    </div>
  );
}
