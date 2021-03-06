/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import "./default.css";
import "./index.css";
import { render } from "./App";

let styleSheet = "";

// (window as any).electron.handle(
//   "stylesheet-loaded",
//   (event: any, data: any) => {
//     console.log(event);
//     console.log(data);
//     console.log("Something happened");
//   }
// );

(window as any).electron.handleLoadStyleSheet(
  (fluff: any, userStyleSheet: string) => render(userStyleSheet)
);

window.addEventListener("app-close", () => {
  (window as any).electron.send("app-close");
});

window.addEventListener("app-minimise", () => {
  (window as any).electron.send("app-minimise");
});

window.addEventListener("app-maximise", () => {
  (window as any).electron.send("app-maximise");
});

render(styleSheet);
