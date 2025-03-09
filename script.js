// DOM Elements
const generateBtn = document.getElementById("generate-btn");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-btn");
const numbersDisplay = document.getElementById("numbers-display");
const maxInput = document.getElementById("max");
const countInput = document.getElementById("count");
const maxError = document.getElementById("max-error");
const countError = document.getElementById("count-error");

// Generate Random Numbers
function generateRandomNumbers(max, count) {
  const numbers = [];
  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * max) + 1; // Default min is 1
    numbers.push(randomNumber);
  }
  return numbers;
}

// Display Numbers in Modal
function displayNumbers(numbers) {
  numbersDisplay.innerHTML = numbers
    .map((num) => `<div class="number-card">${num}</div>`)
    .join("");
  modal.style.display = "flex";
}

// Input Validation
function validateInputs() {
  let isValid = true;
  const max = parseInt(maxInput.value);
  const count = parseInt(countInput.value);

  if (isNaN(max) || max <= 0) {
    maxError.textContent = "Please enter a valid max range.";
    maxError.style.display = "block";
    isValid = false;
  } else {
    maxError.style.display = "none";
  }

  if (isNaN(count) || count <= 0) {
    countError.textContent = "Please enter a valid count.";
    countError.style.display = "block";
    isValid = false;
  } else {
    countError.style.display = "none";
  }

  return isValid;
}

// Event Listeners
generateBtn.addEventListener("click", () => {
  if (!validateInputs()) return;

  const max = parseInt(maxInput.value);
  const count = parseInt(countInput.value);

  const randomNumbers = generateRandomNumbers(max, count);
  displayNumbers(randomNumbers);
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
