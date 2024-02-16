import React from "react";
import styles from "./Container.module.css";

function Container({ children, flex }) {
  return (
    <div className={flex ? styles.flexContainer : styles.container}>
      {children}
    </div>
  );
}

export default Container;
