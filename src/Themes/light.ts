import { DefaultTheme } from "styled-components";

const light: DefaultTheme = {
  background: {
    primary: "white",
    secondary: "grey",
    panel: "lightgray",
  },
  border: {
    panel: "1px solid white",
  },
  text: {
    color: {
      primary: "black",
    },
  },
  button: {
    primary: "#111217",
  },
  borderRadius: "10px",
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
  textarea: {
    background: "",
    color: "",
    borderRadius: "",
    border: "",
    padding: "",
    fontSize: "",
  },
};

export default light;
