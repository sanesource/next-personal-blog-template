import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { name, menu } from "../constants/default.json";

const Header: NextPage = () => {
  const Links = menu.map((link) => (
    <Link key={link.title} href={`/${link.href}`} passHref>
      <span className={styles.link}>{link.title}</span>
    </Link>
  ));

  return (
    <header>
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.links}>{Links}</div>
    </header>
  );
};

export default Header;
