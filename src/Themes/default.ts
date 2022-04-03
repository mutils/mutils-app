import { DefaultTheme } from "styled-components";

const Default: DefaultTheme = {
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
    showIcon: true,
    width: "20px",
    height: "20px",
    minimiseColor: "transparent",
    maximiseColor: "transparent",
    closeColor: "transparent",
    spacing: "2px",
  },
  textarea: {
    background: "black",
    color: "white",
    borderRadius: "4px",
    border: "0.5px solid grey, 0.5px solid grey",
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: "0px 0px 2px 0px",
    padding: "",
    fontSize: "1rem",
  },
};

export default Default;
