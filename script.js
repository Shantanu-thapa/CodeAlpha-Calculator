const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    if (value) {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

equalsBtn.addEventListener("click", () => {
  try {
    currentInput = eval(currentInput).toString();
    display.value = currentInput;
  } catch {
    display.value = "Error";
    currentInput = "";
  }
});

clearBtn.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});

// Optional: Keyboard support
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if ((/[0-9+\-*/.]/.test(key))) {
    currentInput += key;
    display.value = currentInput;
  } else if (key === "Enter") {
    try {
      currentInput = eval(currentInput).toString();
      display.value = currentInput;
    } catch {
      display.value = "Error";
      currentInput = "";
    }
  } else if (key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  } else if (key.toLowerCase() === "c") {
    currentInput = "";
    display.value = "";
  }
});
