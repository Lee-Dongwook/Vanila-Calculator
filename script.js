let history = [];
function appendValue(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function calculateResult() {
  try {
    const result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;

    history.push(`${document.getElementById("result").value} = ${result}`);
    updateHistory();
  } catch (error) {
    alert("Invalid expression");
  }
}

function updateHistory() {
  const historyContainer = document.getElementById("history");
  historyContainer.innerHTML = history
    .map((entry) => `<li>${entry}</li>`)
    .join("");
}

function calculateSquareRoot() {
  const currentValue = document.getElementById("result").value;
  document.getElementById("result").value = Math.sqrt(currentValue);
}

function calculateExponent() {
  const currentValue = document.getElementById("result").value;
  document.getElementById("result").value = Math.pow(currentValue, 2);
}

function calculatePercentage() {
  const currentValue = document.getElementById("result").value;
  document.getElementById("result").value = currentValue / 100;
}

function calculateSin() {
  const currentValue = document.getElementById("result").value;
  document.getElementById("result").value = Math.sin(currentValue);
}

function calculateCos() {
  const currentValue = document.getElementById("result").value;
  document.getElementById("result").value = Math.cos(currentValue);
}

function calculateTan() {
  const currentValue = document.getElementById("result").value;
  document.getElementById("result").value = Math.tan(currentValue);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").then(() => {
      console.log("Service worker registered");
    });
  });
}
