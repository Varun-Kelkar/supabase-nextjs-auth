import styles from './page.module.css'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Welcome to Supabase + Next.js Auth Demo</h1>
      <p className={styles.subtitle}>
        This demo shows how to implement email-password authentication with Supabase & Next.js App Router.
      </p>
      <div className={styles.steps}>
        <ol>
          <li>🔑 Sign up with email & password</li>
          <li>🔓 Login to access protected dashboard</li>
          <li>🚪 Logout to end session</li>
        </ol>
      </div>
      <Link href="/login" className={styles.cta}>
        Get Started →
      </Link>
    </section>
  )
}
