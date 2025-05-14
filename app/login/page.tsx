"use client";
import { useActionState } from "react";
import styles from "./page.module.css";
import { login } from "./action";
import Link from "next/link";
export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, { message: "" });

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Login</h1>
      <form className={styles.form} action={formAction}>
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          id="email"
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          id="password"
          name="password"
        />
        <button disabled={isPending} className={styles.button} type="submit">
          Login
        </button>
      </form>

      {state.message && <p className={styles.error}>{state.message}</p>}
      <Link href="/signup" className={styles.link}>
        Don&apos;t have an account? Sign up
      </Link>
    </div>
  );
}
