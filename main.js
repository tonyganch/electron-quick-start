const {app, BrowserWindow, globalShortcut, Menu, Tray} = require('electron')
const path = require('path')
const url = require('url')

let mainWindow
let tray = null


function createWindow () {
  tray = new Tray(__dirname + '/Skype.png')
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Item1', type: 'radio'},
    {label: 'Item2', type: 'radio'},
    {label: 'Item3', type: 'radio', checked: true},
    {label: 'Item4', type: 'radio'}
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)

  mainWindow = new BrowserWindow({width: 801, height: 600})
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))


  mainWindow.on('closed', function () {
    mainWindow = null
  })

  const menu = Menu.buildFromTemplate([
      {label: 'Pandas'},
      {label: 'Mau', submenu: [
        {label: 'Zoom In', accelerator: 'CommandOrControl+Plus', click:()=> {console.log('PERCENTAGE')}},
        {label: 'Percentage', accelerator: 'CommandOrControl+%', click:()=> {console.log('PERCENTAGE')}},
        {label: 'Colon', accelerator: 'CommandOrControl+:', click:()=> {console.log('COLON')}},
        {label: 'Shift+4', accelerator: 'CommandOrControl+Shift+4', click:()=> {console.log('SHIFT 4')}},
        {label: 'Shift+5', accelerator: 'CommandOrControl+Shift+5', click:()=> {console.log('SHIFT 5')}},
        {label: 'R', accelerator: 'CommandOrControl+R', click:()=> {console.log('R')}},
      ]},
  ])
  Menu.setApplicationMenu(menu)
}

app.on('ready', createWindow)

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
