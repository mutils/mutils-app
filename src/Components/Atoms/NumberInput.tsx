import React, { FC } from "react";

const NumberInput: FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...restProps
}) => {
  return <input className="number-input" {...restProps} type="number" />;
};

export default NumberInput;
