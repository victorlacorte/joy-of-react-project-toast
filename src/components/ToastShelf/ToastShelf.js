import React from "react";

import styles from "./ToastShelf.module.css";

function ToastShelf({ children }) {
  return (
    <ol className={styles.wrapper}>
      {children.map(({ id, toast }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            {toast}
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
