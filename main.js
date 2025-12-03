const { app, BrowserWindow, ipcMain } = require('electron')

const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // win.loadFile('index.html')
  console.log('mcp-share');
  
  win.loadURL('https://iopsit.midea.com/frontweb-iop/training-robot-pc/knowledge');
  // 开发阶段打开调试工具
  win.webContents.openDevTools()
}

app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()
})