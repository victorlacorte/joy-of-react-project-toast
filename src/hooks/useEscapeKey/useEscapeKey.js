import React from "react";

function useEscapeKey(onKeyDown) {
  React.useEffect(() => {
    function handleEscape(event) {
      if (event.code === "Escape") {
        onKeyDown();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onKeyDown]);
}

export default useEscapeKey;
