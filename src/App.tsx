import React from "react";
import ReactDOM from "react-dom";

import { Main } from "./Views/Main";

export function render(styleSheet: string) {
  ReactDOM.render(<Main styleSheet={styleSheet} />, document.body);
}
