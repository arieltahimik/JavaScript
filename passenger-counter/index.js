let count = 0;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

function increment() {
  count = count + 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";    // the last space is not displaying
  //saveEl.innerText += countDash;  // not displayng 'hidden' contnent, e.g. space
  saveEl.textContent += countStr
  count = 0
  countEl.textContent = 0
  //console.log(countStr);
}
