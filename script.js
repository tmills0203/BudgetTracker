const totalDisplay = document.getElementById("totalDisplay");

// inputs
const totalInput = document.getElementById("totalInput");
const expenseInput = document.getElementById("expenseInput");

// BTN
const totalBtn = document.getElementById("totalBtn");
const expenseBtn = document.getElementById("expenseBtn");

let total = [];

totalBtn.addEventListener("click", () => {
  let inputNumVal = Number(totalInput.value);
  total.push(inputNumVal);
  console.log(total);

  localStorage.setItem("totalNums", inputNumVal);
  totalInput.value = "";

  render();
});

function updateTotal() {
  // retrieve number from localstorage
  let currentNums = JSON.parse(localStorage.getItem("totalNums"));

  // total array
  let sum = total.reduce((sum, num) => sum + num, 0);
  console.log(sum);

  localStorage.setItem("totalNums", JSON.stringify(currentNums));

  return sum;
}

function render() {
  let renderTotal = updateTotal();
  totalDisplay.textContent = renderTotal;
}
