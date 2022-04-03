import React, { FC } from "react";

interface Props {
  selected?: boolean;
}

const DropDownListItem: FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & Props
> = ({ children, selected, ...restProps }) => {
  return (
    <button
      className={`drop-down-list-item${selected ? " selected" : ""}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default DropDownListItem;
