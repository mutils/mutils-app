const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  handleLoadStyleSheet: (callback) => {
    return ipcRenderer.on("stylesheet-loaded", callback);
  },
  send: (channel, data) => {
    ipcRenderer.invoke(channel, data);
  },
  handle: (channel, callable, ...args) =>
    ipcRenderer.addListener(channel, callable),
});
