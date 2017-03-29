const {BrowserWindow} = require('electron').remote;

function createSameGroupWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    tabbingIdentifier: 'pandas'
  })
  win.loadURL('https://github.com');
}

function createNewGroupWindow () {
  const win = new BrowserWindow({width: 800, height: 400})
  win.loadURL('https://github.com');
}

function createFramelessWindow () {
  const win = new BrowserWindow({width: 600, height: 400, frame: false})
  win.loadURL('https://github.com');
}

document.getElementById('same-group').addEventListener('click', function() {
  createSameGroupWindow();
});

document.getElementById('new-group').addEventListener('click', function() {
  createNewGroupWindow();
});

document.getElementById('frameless').addEventListener('click', function() {
  createFramelessWindow();
});
