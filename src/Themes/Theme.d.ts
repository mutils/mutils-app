import "styled-components";

declare interface Theme {
  background: {
    primary: string;
    secondary: string;
    panel: string;
  };
  border: {
    panel: string;
  };
  text: {
    color: {
      primary: string;
    };
  };
  button: {
    primary: string;
  };
  borderRadius: string;
  windowButtons: {
    borderRadius: string;
    showIcon: boolean;
    width: string;
    height: string;
    minimiseColor: string;
    maximiseColor: string;
    closeColor: string;
    spacing: string;
  };
  textarea: {
    background?: string;
    color?: string;
    borderRadius?: string;
    border?: string;
    borderColor?: string;
    borderStyle?: string;
    borderWidth?: string;
    padding?: string;
    fontSize?: string;
    boxShadow?: string;
  };
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
