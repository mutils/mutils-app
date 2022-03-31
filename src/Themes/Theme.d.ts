import 'styled-components';

declare interface Theme {
    background: {
        primary: string,
        secondary: string,
        panel: string,
    },
    border: {
        panel: string;
      },
    text: {
        color: {
            primary: string,
        }
    },
    button: {
        primary: string,
    },
    borderRadius: string,
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}