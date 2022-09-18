// https://www.omnicalculator.com/conversion/quarts-to-cups-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const cupsRadio = document.getElementById('cupsRadio');
const quartsRadio = document.getElementById('quartsRadio');

let cups;
let quarts = v; 

// labels of the inpust
const variable = document.getElementById('variable');

cupsRadio.addEventListener('click', function() {
  variable.textContent = 'Quarts';
  quarts = v;
  result.textContent = '';
});

quartsRadio.addEventListener('click', function() {
  variable.textContent = 'Cups';
  cups = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(cupsRadio.checked)
    result.textContent = `Cups = ${computecups().toFixed(5)}`;

  else if(quartsRadio.checked)
    result.textContent = `Quarts = ${computequarts().toFixed(5)}`;
})

// calculation

function computecups() {
  return Number(quarts.value) * 4;
}

function computequarts() {
  return Number(cups.value) / 4;
}