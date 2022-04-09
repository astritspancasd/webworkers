const DARK = '#000';
const WHITE = '#fff';

let defaultTheme = WHITE;

document.getElementById('btn-theme-change').addEventListener('click', () => {
  document.getElementById('container').style.backgroundColor =
    defaultTheme === DARK ? WHITE : DARK;
  document.getElementById('container').style.color =
    defaultTheme === DARK ? WHITE : DARK;
  defaultTheme = defaultTheme === DARK ? WHITE : DARK;
});

if (window.Worker) {
  const worker = new Worker('./worker.js');

  document
    .getElementById('btn-start-calculate')
    .addEventListener('click', () => {
      worker.postMessage('Start Calculation');
    });

  worker.onmessage = (event) => {
    console.log(event.data);
  };
} else {
  console.log('Your browser doesn\'t support web workers');
}
