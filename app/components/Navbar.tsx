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
      <ul className={styles.navLinks}>
        <li className={styles.navLinkItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navLinkItem}>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
