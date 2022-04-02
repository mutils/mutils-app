import { DefaultTheme } from "styled-components";

const dark: DefaultTheme = {
  background: {
    primary: "black",
    secondary: "grey",
    panel: "#1C1E26",
  },
  border: {
    panel: "1px solid #323643",
  },
  text: {
    color: {
      primary: "grey",
    },
  },
  button: {
    primary: "#111217",
  },
  borderRadius: "5px",
  windowButtons: {
    borderRadius: "999px",
    showIcon: false,
    width: "20px",
    height: "20px",
    minimiseColor: "white",
    maximiseColor: "white",
    closeColor: "white",
    spacing: "2px",
  },
};

export default dark;
