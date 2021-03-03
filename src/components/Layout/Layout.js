import React from "react";
import Head from "next/head";
import Header from "../Header/Header";
import styles from "./Layout.module.css";
import CardLayout from '../CardLayout/CardLayout';

const Layout = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.logo}>
        <h1>logo</h1>
      </div> */}
      <div className={styles.header}>
        <Header />
      </div>

      <div className={styles.nav}>
        <nav>nav</nav>
      </div>

      <div className={styles.main}>
        <CardLayout />
      </div>

      <div className={styles.aside}>
        <aside>aside</aside>
      </div>

      <div className={styles.footer}>
        <footer>footer</footer>
      </div>
    </div>
  );
};

export default Layout;
