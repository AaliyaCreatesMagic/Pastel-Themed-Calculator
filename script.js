const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.innerText !== "=" && button.innerText !== "C") {
      display.value += button.innerText;
    }
  });
});

equals.addEventListener("click", () => {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
});

clear.addEventListener("click", () => {
  display.value = "";
});
