import React from "react";
import { SearchRounded } from "@material-ui/icons";

import styles from "./SearchInput.module.css";

const SearchInput = ({ ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} {...rest} />
      <button className={styles.button}>
        <SearchRounded className={styles.icon} />
      </button>
    </div>
  );
};

export default SearchInput;
