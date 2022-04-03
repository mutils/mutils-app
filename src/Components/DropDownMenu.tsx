import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { DropDownButton } from "Components/Atoms";

interface DropDownMenuProps {
  text: string;
  icon: IconDefinition;
  initiallyOpen?: boolean;
}

const ChildContainer = styled.div`
  padding-left: 25px;
`;

const DropDownMenu: FC<DropDownMenuProps> = ({
  children,
  text,
  icon,
  initiallyOpen = false,
}) => {
  const [open, setOpen] = useState(initiallyOpen);

  useEffect(() => {
    if (initiallyOpen) {
      setOpen(true);
    }
  }, [initiallyOpen]);

  return (
    <div>
      <DropDownButton
        text={text}
        icon={icon}
        open={open}
        onClick={() => setOpen(!open)}
      />
      {open && <ChildContainer>{children}</ChildContainer>}
    </div>
  );
};

export default DropDownMenu;
