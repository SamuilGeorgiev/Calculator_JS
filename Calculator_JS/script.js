document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll(".buttons button");
  
    let currentInput = "";
    let operatorClicked = false;
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.textContent;
  
        if (value === "C") {
          currentInput = "";
          display.value = "";
        } else if (value === "=") {
          try {
            // Evaluate the expression
            currentInput = eval(currentInput).toString();
            display.value = currentInput;
          } catch (e) {
            display.value = "Error";
            currentInput = "";
          }
        } else {
          currentInput += value;
          display.value = currentInput;
        }
      });
    });
  });
  