const totalDisplay = document.getElementById("totalDisplay");

// inputs
const totalInput = document.getElementById("totalInput");
const expenseInput = document.getElementById("expenseInput");

// BTN
const totalBtn = document.getElementById("totalBtn");
const expenseBtn = document.getElementById("expenseBtn");

let total = 300;

totalBtn.addEventListener("click", () => {
  let totalVal = totalInput.value;
  totalDisplay.textContent = totalVal;
  totalInput.value = "";
});
