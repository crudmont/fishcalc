const fish = {
  tilapia: {basic: 75, silver: 93, gold: 112, iridium: 150},
  chub: {basic: 50, silver: 62, gold: 75, iridium: 100}
}
const felt = document.getElementById("fish-container");

function checkProfessions(a, f) {
  if (a.checked) {
    return 1.5;
  } else if (f.checked) {
    return 1.25;
  }
  return 1;
}

function computeFishValue(t, qual, n, pro) {
  let current = fish[t];
  return Math.floor(n * current[qual] * pro);
}

function displayResults() {
  let t = document.getElementById("fish").value;
  let q = document.getElementById("qual").value;
  let n = document.getElementById("quantity").value;
  let a = document.getElementById("Angler");
  let f = document.getElementById("Fisher");

  let pro = checkProfessions(a, f);

  let elt = document.getElementById("result");
  let result = computeFishValue(t, q, n, pro);
  elt.innerText = `= ${result}g`;
}

displayResults();
felt.addEventListener("change", displayResults);
