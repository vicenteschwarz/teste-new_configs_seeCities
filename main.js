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

let winHome, winAdmin, winAgendamento;

app.whenReady().then(() => {
  createWindow();

  ipcMain.handle('abrir-home', () => {
    if (!winHome || winHome.isDestroyed()) winHome = createWindow('src/homePage/home.html');
    else winHome.focus();
  });

  ipcMain.handle('abrir-admin', () => {
    if (!winAdmin || winAdmin.isDestroyed()) winAdmin = createWindow('src/adm/admin.html');
    else winAdmin.focus();
  });

  ipcMain.handle('abrir-agendamento', () => {
    if (!winAgendamento || winAgendamento.isDestroyed()) winAgendamento = createWindow('src/agendamento/agendamento.html');
    else winAgendamento.focus();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
