import Image from "next/image";
import "../styles/globals.css";
import styles from "../styles/App.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const mobileLinksRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileLinksRef.current &&
        !mobileLinksRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderLinks = (forMobile) => (
    <div
      className={`${styles.links} ${forMobile ? styles.mobileLinks : null}`}
      ref={mobileLinksRef}
    >
      {forMobile && (
        <div className={styles.closeButton}>
          <Image
            src="/icon-close.svg"
            width={20}
            height={21}
            alt="close button"
            onClick={() => setShowMenu(false)}
          />
        </div>
      )}
      <Link href="/">
        <a
          className={router.pathname === "/" ? styles.active : null}
          onClick={() => setShowMenu(false)}
        >
          <strong>00</strong> HOME
        </a>
      </Link>
      <Link href="/destination">
        <a
          className={router.pathname === "/destination" ? styles.active : null}
          onClick={() => setShowMenu(false)}
        >
          <strong>01</strong> DESTINATION
        </a>
      </Link>
      <Link href="/crew">
        <a
          className={router.pathname === "/crew" ? styles.active : null}
          onClick={() => setShowMenu(false)}
        >
          <strong>02</strong> CREW
        </a>
      </Link>
      <Link href="/technology">
        <a
          className={router.pathname === "/technology" ? styles.active : null}
          onClick={() => setShowMenu(false)}
        >
          <strong>03</strong> TECHNOLOGY
        </a>
      </Link>
    </div>
  );

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <hr className={styles.hr} />
        <Image src="/logo.svg" width={48} height={48} alt="logo" />
        <div className={styles.menuButton} onClick={() => setShowMenu(true)}>
          <Image
            src="/icon-hamburger.svg"
            width={24}
            height={21}
            alt="menu button"
          />
        </div>
        {showMenu && renderLinks(true)}
        {renderLinks(false)}
      </nav>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
