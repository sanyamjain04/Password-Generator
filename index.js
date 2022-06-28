const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const buttonEl = document.getElementById("button");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*(_)=/-+";
console.log(lowerLetters);

function getUppercaseLetters() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getLowerercaseLetters() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getNumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbols() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  const len = lenEl.value;

  let password = "";

  if (upperEl.checked) {
    password += getUppercaseLetters();
  }
  if (lowerEl.checked) {
    password += getLowerercaseLetters();
  }
  if (numberEl.checked) {
    password += getNumbers();
  }
  if (symbolEl.checked) {
    password += getSymbols();
  }

  for (let i = password.length ; i < len; i++) {
    const x = generateX();
    password += x;
  }

  pwEl.innerText = password;
  console.log(password);
}

function generateX() {
  const xs = [];
  if (upperEl.checked) {
    xs.push(getUppercaseLetters());
  }
  if (lowerEl.checked) {
    xs.push(getLowerercaseLetters());
  }
  if (numberEl.checked) {
    xs.push(getNumbers());
  }
  if (symbolEl.checked) {
    xs.push(getSymbols());
  }
  if (xs.length === 0) return "";
  return xs[Math.floor(Math.random() * xs.length)];
}

buttonEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", function () {
  const textarea = document.createElement("textarea");
  const password = pwEl.innerText;

  if (!password) return;

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("password copied to clipboard");
});
