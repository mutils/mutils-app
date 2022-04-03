import React, { FC } from "react";

interface Props {
  fullWidth?: boolean;
}

const TextArea: FC<
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & Props
> = ({ children, fullWidth, ...restProps }) => {
  return (
    <textarea
      className={`text-area${fullWidth ? " full-width" : ""}`}
      {...restProps}
    >
      {children}
    </textarea>
  );
};

export default TextArea;
