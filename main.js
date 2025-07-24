
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow(pagina = 'src/login/index.html') {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  win.loadFile(path.join(__dirname, pagina));
  return win;
}

app.whenReady().then(() => {
  createWindow();

  ipcMain.handle('abrir-home', () => {
  return createWindow('src/homePage/home.html');
});

ipcMain.handle('abrir-admin', () => {
  return createWindow('src/adm/admin.html');
});

ipcMain.handle('abrir-agendamento', () => {
  return createWindow('src/agendamento/agendamento.html');
});
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

//teste commit falho
