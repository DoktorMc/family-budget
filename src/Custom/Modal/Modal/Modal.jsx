import React, { useCallback, useState, useEffect, useRef } from "react";
import Portal, { createContainer } from "../Portal/Portal";
import "./Modal.scss";

const MODAL_CONTAINER_ID = "modal-container-id";

const Modal = (props) => {
  const { title, onClose, children } = props;

  const rootRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID });
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleWrapperClick = (event) => {
      const { target } = event;

      if (target instanceof Node && rootRef.current === target) {
        onClose?.();
      }
    };
    const handleEscapePress = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("click", handleWrapperClick);
    window.addEventListener("keydown", handleEscapePress);

    return () => {
      window.removeEventListener("click", handleWrapperClick);
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, [onClose]);

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <div className="wrap" ref={rootRef} data-testid="wrap">
        <div className="content">
          <button
            type="button"
            className="closeButton"
            onClick={handleClose}
            data-testid="modal-close-button"
          >
            Х
          </button>
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};

export default Modal;
