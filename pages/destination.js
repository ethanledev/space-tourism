import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Destination.module.css";
import data from "../data.json";

import { useState } from "react";

const Destination = () => {
  const [index, setIndex] = useState(0);
  const { destinations } = data;

  const renderTabs = () => {
    return destinations.map((destination, i) => (
      <div
        key={destination.name}
        className={i === index ? styles.active : null}
        onClick={() => setIndex(i)}
      >
        {destination.name}
      </div>
    ));
  };

  return (
    <main className={styles.main}>
      <Head>
        <title>Pick Your Destination</title>
      </Head>

      <h1>
        <span>01</span>PICK YOUR DESTINATION
      </h1>
      <section className={styles.section}>
        <div className={styles.image}>
          <Image
            src={destinations[index].images.webp}
            alt={destinations[index].name}
            width={445}
            height={445}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.tabs}>{renderTabs()}</div>
          <article className={styles.article}>
            <h2>{destinations[index].name}</h2>
            <p>{destinations[index].description}</p>
            <div className={styles.travelInfo}>
              <div className={styles.title}>AVG. DISTANCE</div>
              <div className={styles.title}>EST. TRAVEL TIME</div>
              <div className={styles.detail}>
                {destinations[index].distance}
              </div>
              <div className={styles.detail}>{destinations[index].travel}</div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Destination;
