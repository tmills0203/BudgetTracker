const totalDisplay = document.getElementById("totalDisplay");

// inputs
const totalInput = document.getElementById("totalInput");
const expenseInput = document.getElementById("expenseInput");

// BTN
const totalBtn = document.getElementById("totalBtn");
const expenseBtn = document.getElementById("expenseBtn");

totalBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let inputNumVal = Number(totalInput.value);
  // console.log(inputNumVal);
  localStorage.setItem("totalNum", inputNumVal);
  updateTotal(inputNumVal);

  totalInput.value = "";
});

function updateTotal(inputNumVal) {
  let inputStorageNum = inputNumVal;
  console.log(`this is input from click btn ${inputStorageNum}`);
  // retrieve number from localstorage
  let currentNum = +localStorage.getItem("totalNum");

  // updated num
  currentNum += inputStorageNum;
  console.log(`this is the updated num: ${currentNum}`);

  let result = localStorage.setItem("totalNum", currentNum);
  console.log(result);
  // return result;
}
// console.log(localStorage);

// function render() {
//   let renderTotal = updateTotal();
//   totalDisplay.textContent = renderTotal;
//   totalInput.value = "";
// }
