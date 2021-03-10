import React from "react";
import Header from "../Header/Header";
import styles from "./Layout.module.css";
import CardLayout from "../CardLayout/CardLayout";

const HomeLayout = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.logo}>
        <h1>logo</h1>
      </div> */}
      <section className={styles.header}>
        <Header />
      </section>

      <section className={styles.nav}>
        <nav>nav</nav>
      </section>

      <section className={styles.main}>
        <CardLayout />
      </section>

      <section className={styles.aside}>
        <aside>aside</aside>
      </section>

      <section className={styles.footer}>
        <footer>footer</footer>
      </section>
    </div>
  );
};

export default HomeLayout;
