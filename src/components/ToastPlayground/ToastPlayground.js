import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

const variants = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const messageId = React.useId();
  const variantId = React.useId();

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor={messageId}
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id={messageId}
              className={styles.messageInput}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {variants.map((variant) => (
              <label htmlFor={`${variantId}-${variant}`}>
                <input
                  id={`${variantId}-${variant}`}
                  type="radio"
                  name="variant"
                  value={variant}
                />
                {variant}
              </label>
            ))}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
