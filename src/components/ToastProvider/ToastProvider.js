import React from "react";

import Toast from "../Toast/Toast";

const ToastContext = React.createContext();
export const useToastContext = () => React.useContext(ToastContext);

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback((variant, message) => {
    const id = crypto.randomUUID();

    function handleClose() {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }

    setToasts((prevToasts) => [
      ...prevToasts,
      {
        id,
        toast: (
          <Toast variant={variant} onClose={handleClose}>
            {message}
          </Toast>
        ),
      },
    ]);
  }, []);

  const value = React.useMemo(() => ({ toasts, addToast }), [toasts, addToast]);

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
