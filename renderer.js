// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const backButton = document.getElementById('back');
const pushButton = document.getElementById('push');

backButton.addEventListener('click', (event) => {
  console.log('Back button clicked');
  console.log('History length:', history.length);
  if (history.length < 2) {
    return;
  }

  console.log('history.back()');
  history.back();
});

pushButton.addEventListener('click', (event) => {
  console.log('Push button clicked');
  console.log('History length before push:', history.length);

  console.log('history.pushState()');
  history.pushState({id: Math.random()}, '');
  console.log('History length after push:', history.length);
});
