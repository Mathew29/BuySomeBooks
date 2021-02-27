import React from "react";
import SearchInput from "../SearchInput/SearchInput";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>logo</div>
      <div className={styles.search}>
        <SearchInput placeholder="Search for games" />
      </div>
      <div className={styles.signin}>signin / cart</div>
      <div className={styles.nav}>nav</div>
    </div>
  );
};

export default Header;
