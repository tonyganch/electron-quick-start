const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const url = require('url')

let mainWindow;

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    tabbingIdentifier: 'pandas'
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  return win;
}

app.on('ready', () => {
  mainWindow = createWindow();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
