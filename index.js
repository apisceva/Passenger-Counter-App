let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el"); //pass in argument
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countrStr = count + " - ";
  saveEl.textContent += countrStr;
  countEl.textContent = 0;
  count = 0;
}
