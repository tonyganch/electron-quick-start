// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {remote} = require('electron')
const {Menu} = remote

const menu = Menu.buildFromTemplate([
    {role: 'copy'},
    {role: 'cut'},
    {role: 'paste'}
]);
window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  menu.popup(remote.getCurrentWindow())
}, false)
