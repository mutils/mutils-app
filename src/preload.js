const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  send: (channel, data) => {
      ipcRenderer.invoke(channel, data);
    },
  handle: (channel, callable, event, data) =>
    ipcRenderer.on(channel, callable(event, data)),
});
