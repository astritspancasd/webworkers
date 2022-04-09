const worker = new Worker("./worker.js");

const DARK = "#000";
const WHITE = "#fff";

let defaultTheme = WHITE;

document.getElementById("btn-theme-change").addEventListener("click", () => {
  document.getElementById("container").style.backgroundColor =
    defaultTheme === DARK ? WHITE : DARK;
  document.getElementById("container").style.color =
    defaultTheme === DARK ? WHITE : DARK;
  defaultTheme = defaultTheme === DARK ? WHITE : DARK;
});

document.getElementById("btn-start-calculate").addEventListener("click", () => {
  worker.postMessage("Start Calculation");
});

worker.onmessage = (message) => {
  console.log(message.data);
};
