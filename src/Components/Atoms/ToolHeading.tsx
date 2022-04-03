import React, { FC } from "react";
import styled from "styled-components";

const Styled = styled.h1`
  margin-top: 0;
  font-size: 1.5rem;
`;

const ToolHeading: FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  ...restProps
}) => {
  return (
    <Styled className="tool-heading" {...restProps}>
      {children}
    </Styled>
  );
};

export default ToolHeading;
