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
  } catch (error) {
    alert("Invalid expression");
  }
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").then(() => {
      console.log("Service worker registered");
    });
  });
}
