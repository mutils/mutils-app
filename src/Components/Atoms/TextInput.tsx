import React, { FC } from "react";

interface Props {
  fullWidth?: boolean;
}

const TextInput: FC<React.InputHTMLAttributes<HTMLInputElement> & Props> = ({
  children,
  fullWidth,
  ...restProps
}) => {
  return (
    <input
      type="text"
      className={`text-input${fullWidth ? " full-width" : ""}`}
      {...restProps}
    >
      {children}
    </input>
  );
};

export default TextInput;
