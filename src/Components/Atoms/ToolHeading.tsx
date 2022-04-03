import React, { FC } from "react";

const ToolHeading: FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  ...restProps
}) => {
  return (
    <h1 className="tool-heading" {...restProps}>
      {children}
    </h1>
  );
};

export default ToolHeading;
