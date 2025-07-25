const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  abrirHome: () => ipcRenderer.invoke('abrir-home'),
  abrirAdmin: () => ipcRenderer.invoke('abrir-admin'),
  abrirAgendamento: () => ipcRenderer.invoke('abrir-agendamento')
});

