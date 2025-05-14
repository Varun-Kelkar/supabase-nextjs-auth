"use client";
import { redirect } from "next/navigation";
import styles from "./Navbar.module.css";
import { logout } from "./action";
import Link from "next/link";

export default function NavBar() {
  const handleLogout = async () => {
    logout();
    redirect("/");
  };

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <h1 className={styles.logo}>Supabase Demo</h1>
      </Link>

      <button className={styles.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}
