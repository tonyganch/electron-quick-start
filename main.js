const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let firstWindow
let secondWindow

function createWindow () {
  const window = new BrowserWindow({width: 800, height: 600})

  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  window.webContents.openDevTools()

  return window
}

app.on('ready', () => {
  firstWindow = createWindow()
  firstWindow.on('closed', function () {
    firstWindow = null
  })

  secondWindow = createWindow()
  secondWindow.on('closed', function () {
    secondWindow = null
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
