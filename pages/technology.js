import Head from "next/head";
import styles from "../styles/Technology.module.css";
import data from "../data.json";
import Image from "next/image";
import { useState, useEffect } from "react";

const Technology = () => {
  const [index, setIndex] = useState(0);
  const [imgType, setImgType] = useState("portrait");
  const [objectFit, setObjectFit] = useState("contain");
  const { technology } = data;

  useEffect(() => {
    const handleImgType = () => {
      if (window.innerWidth > 820) {
        setImgType("portrait");
        setObjectFit("contain");
      } else {
        setImgType("landscape");
        setObjectFit("");
      }
    };

    handleImgType();

    window.addEventListener("resize", handleImgType);

    return () => window.removeEventListener("resize", handleImgType);
  });

  return (
    <main className={styles.main}>
      <Head>
        <title>Space Launch 101</title>
      </Head>

      <h1 className="tourHeading">
        <span>03</span>SPACE LAUNCH 101
      </h1>

      <section className={styles.section}>
        <div className={styles.content}>
          <div className={styles.sliders}>
            {technology.map((tech, i) => (
              <div
                key={tech.name}
                className={i === index ? styles.active : null}
                onClick={() => setIndex(i)}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <article className={styles.article}>
            <span>THE TERMINOLOGY...</span>
            <h2>{technology[index].name}</h2>
            <p>{technology[index].description}</p>
          </article>
        </div>
        <div className={styles.image}>
          <Image
            src={technology[index].images[imgType]}
            alt={technology[index].name}
            layout="fill"
            objectFit={objectFit}
            objectPosition="right"
          />
        </div>
      </section>
    </main>
  );
};

export default Technology;
