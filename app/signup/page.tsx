"use client";
import { useActionState } from "react";
import styles from "./page.module.css";
import { signup } from "./action";
import Link from "next/link";

export default function SignUpPage() {
  const [state, formAction, isPending] = useActionState(signup, {
    message: "",
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Sign Up</h1>
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
          Sign Up
        </button>
      </form>
      {state.message && <p className={styles.error}>{state.message}</p>}
      <Link href="/login" className={styles.link}>
        Already have an account? Login
      </Link>
    </div>
  );
}
