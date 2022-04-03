import React, { FC } from "react";

const Select: FC<React.SelectHTMLAttributes<HTMLSelectElement>> = ({
  children,
  ...restProps
}) => {
  return (
    <select className="select" {...restProps}>
      {children}
    </select>
  );
};

export default Select;
