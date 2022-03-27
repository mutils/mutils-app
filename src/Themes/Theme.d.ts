import 'styled-components';

declare interface Theme {
    background: {
        primary: string,
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
  export interface DefaultTheme {
    background: {
        primary: string,
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
}