const totalDisplay = document.getElementById("totalDisplay");

// inputs
const totalInput = document.getElementById("totalInput");
const expenseInput = document.getElementById("expenseInput");

// BTN
const totalBtn = document.getElementById("totalBtn");
const expenseBtn = document.getElementById("expenseBtn");

let total = [100, 200];

totalBtn.addEventListener("click", () => {
  render();
});

function updateTotal() {
  let totalVal = Number(totalInput.value);
  total.push(totalVal);
  return total.reduce((total, num) => total + num, 0);
}

console.log(updateTotal());

function render() {
  let renderTotal = updateTotal();
  totalDisplay.textContent = renderTotal;
  totalInput.value = "";
}
