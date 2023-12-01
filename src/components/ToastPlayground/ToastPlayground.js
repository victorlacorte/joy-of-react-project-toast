import React from "react";

import Button from "../Button";
import { useToastContext } from "../ToastProvider";
import ToastShelf from "../ToastShelf/ToastShelf";

import styles from "./ToastPlayground.module.css";

const toastVariants = ["notice", "warning", "success", "error"];
const defaultVariant = toastVariants[0];
const defaultMessage = "";

function ToastPlayground() {
  const [message, setMessage] = React.useState(defaultMessage);
  const [variant, setVariant] = React.useState(defaultVariant);
  const toastContext = useToastContext();
  const messageId = React.useId();
  const variantId = React.useId();

  function handleSubmit(event) {
    event.preventDefault();

    toastContext.addToast(variant, message);

    setMessage(defaultMessage);
    setVariant(defaultVariant);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf>{toastContext.toasts}</ToastShelf>
      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
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
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
