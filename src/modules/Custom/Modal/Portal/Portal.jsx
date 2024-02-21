import React from "react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const createContainer = (options) => {
  if (document.getElementById(options.id)) {
    return;
  }

  const { id, mountNode = document.body } = options;

  const portalContainer = document.createElement("div");

  portalContainer.setAttribute("id", id);
  mountNode.appendChild(portalContainer);
};

const PORTAL_ERROR_MESSAGE =
  "There is no portal container in markup. Please add portal container with proper id attribute.";

const Portal = (...props) => {
  const { id, children } = props;
  const [container, setContainer] = useState<HTMLElement>(null);

  useEffect(() => {
    if (id) {
      const portalContainer = document.getElementById(id);

      if (!portalContainer) {
        throw new Error(PORTAL_ERROR_MESSAGE);
      }
      setContainer(portalContainer);
    }
  }, [id]);

  return container ? createPortal(children, container) : null;
};

export { createContainer, PORTAL_ERROR_MESSAGE };
export default Portal;
