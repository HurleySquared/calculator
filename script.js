const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const divide = (a, b) => {
  return a / b;
};

const multiply = (a, b) => {
  return a * b;
};

// Click event for buttons 
const display = document.querySelector(".display");
const keys = document.querySelector(".keys");
const calculator = document.querySelector('.shell');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
  const key = e.target;
  const action = key.dataset.action;
  const keyContent = key.textContent;
  const displayedNum = display.textContent;
  const previousKeyType = calculator.dataset.previousKeyType;
  if (!action) {
    if (displayedNum === '0' || previousKeyType === "operator") {
      display.textContent = keyContent
    } else {
      display.textContent = displayedNum + keyContent;
    };
  }

  if (action === 'decimal') {
    display.textContent = displayedNum + '.'
  }

  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'divide' ||
    action === 'multiply'
  ) {
    key.classList.add('is-depressed')
    calculator.dataset.previousKeyType = 'operator'
  };

  Array.from(key.parentNode.children)
    .forEach(k => k.classList.remove('is-depressed'))
  }
})