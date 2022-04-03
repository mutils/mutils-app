import React, { FC } from "react";

const MenuButton: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...restProps
}) => {
  return (
    <button className="menu-button" {...restProps}>
      {children}
    </button>
  );
};

export default MenuButton;
