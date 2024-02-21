import React from "react";
import styles from "./Container.module.css";

function Container({ children, flexrow, flexcol }) {
  return (
    <div
      className={
        flexrow
          ? styles.flexContainer
          : flexcol
          ? styles.flexColContainer
          : styles.container
      }>
      {children}
    </div>
  );
}

export default Container;
