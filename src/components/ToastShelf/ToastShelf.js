import React from "react";

import styles from "./ToastShelf.module.css";

function ToastShelf({ children }) {
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
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
