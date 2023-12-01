import React from "react";

import Button from "../Button";
import Toast from "../Toast/Toast";

import styles from "./ToastPlayground.module.css";

const toastVariants = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(toastVariants[0]);
  const [isToastVisible, setIsToastVisible] = React.useState(false);
  const messageId = React.useId();
  const variantId = React.useId();

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {isToastVisible && (
        <Toast
          variant={variant}
          onClose={() => {
            setIsToastVisible(false);
          }}
        >
          {message}
        </Toast>
      )}
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
            {toastVariants.map((toastVariant) => {
              const id = `${variantId}-${toastVariant}`;
              return (
                <label key={id} htmlFor={id}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    value={toastVariant}
                    checked={variant === toastVariant}
                    onChange={(event) => {
                      setVariant(event.target.value);
                    }}
                  />
                  {toastVariant}
                </label>
              );
            })}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button
              onClick={() => {
                setIsToastVisible(true);
              }}
            >
              Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
