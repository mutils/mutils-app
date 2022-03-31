import { DefaultTheme } from "styled-components";

const gruvbox: DefaultTheme = {
  background: {
    primary: "#202020",
    secondary: "#DDC7A1",
    panel: "#202020",
  },
  border: {
    panel: "1px solid #DDC7A1",
  },
  text: {
    color: {
      primary: "#DDC7A1",
    },
  },
  button: {
    primary: "#111217",
  },
  borderRadius: "5px",
  windowButtons: {
    borderRadius: "999px",
    showIcon: false,
    width: "10px",
    height: "10px",
    minimiseColor: "#C18F41",
    maximiseColor: "#8F9A52",
    closeColor: "#B85651",
  },
};

export default gruvbox;
