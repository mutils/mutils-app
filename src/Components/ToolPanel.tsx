import React, { FC } from "react";

const ToolPanel: FC = ({ children }) => {
  return (
    <div id="tool-panel-container">
      <div id="tool-panel">{children}</div>
    </div>
  );
};

export default ToolPanel;
