import { redirect } from "next/navigation";
import NavBar from "../components/Navbar";
import { createClient } from "@/lib/server";

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return redirect("/login");
  }
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
}
