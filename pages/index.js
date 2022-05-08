import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Space Tourism</title>
      </Head>

      <h1 className="srOnly">Home</h1>

      <section className={styles.section}>
        <article className={styles.article}>
          <h2>
            SO, YOU WANT TO TRAVEL TO <br /> <strong>SPACE</strong>
          </h2>
          <p>
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </article>
        <Link href="/destination">
          <a className={styles.exploreButton}>EXPLORE</a>
        </Link>
      </section>
    </main>
  );
}
