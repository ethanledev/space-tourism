import Head from "next/head";
import styles from "../styles/Crew.module.css";
import data from "../data.json";
import { useState } from "react";
import Image from "next/image";

const Crew = () => {
  const [index, setIndex] = useState(0);
  const { crew } = data;

  return (
    <main className={styles.main}>
      <Head>
        <title>Meet Your Crew</title>
      </Head>

      <h1 className="tourHeading">
        <span>02</span>MEET YOUR CREW
      </h1>

      <section className={styles.section}>
        <div className={styles.content}>
          <div></div> {/*spacer*/}
          <article className={styles.article}>
            <h2>
              <span>{crew[index].role}</span>
              <br />
              {crew[index].name}
            </h2>
            <p>{crew[index].bio}</p>
          </article>
          <div className={styles.sliders}>
            {crew.map((member, i) => (
              <div
                key={member.name}
                className={i === index ? styles.active : null}
                onClick={() => setIndex(i)}
              ></div>
            ))}
          </div>
        </div>
        <div className={styles.image}>
          <Image
            src={crew[index].images.webp}
            alt={crew[index].name}
            layout="fill"
            objectFit="contain"
            objectPosition="bottom"
          />
        </div>
      </section>
    </main>
  );
};

export default Crew;
