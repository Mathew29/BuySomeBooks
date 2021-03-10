import React from "react";
import styles from "./CardLayout.module.css";
import Cards from "./Cards/Cards";

const Layout = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.main}>
        <Cards />
      </ul>
    </div>
  );
};

export default Layout;
