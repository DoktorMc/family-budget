import React from "react";

const TabContent = ({ id, activeTab, children }) => {
  return activeTab === id ? <div className="tabnav__content">{children}</div> : null;
};

export default TabContent;
