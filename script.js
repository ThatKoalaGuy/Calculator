//*Functions by specific operations - they get called by the main function
function add(firstNum, secondNum) {
	return Number(firstNum) + Number(secondNum);
}

function subtract(firstNum, secondNum) {
	return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
	return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
	return firstNum / secondNum;
}

function modulus(firstNum, secondNum) {
	return firstNum % secondNum;
}

//*Variables for input - they go into the operate function
let firstNum;
let secondNum;
let operator;

//*Init the display
const display = document.querySelector('.display');
let displayValue = '';

//*Main function that calls functions for specific operations
function operate(firstNum, secondNum, operator) {
	switch (operator) {
		case '+':
			return add(firstNum, secondNum);

		case '-':
			return subtract(firstNum, secondNum);

		case '*':
			return multiply(firstNum, secondNum);

		case '/':
			return divide(firstNum, secondNum);

		case '%':
			return modulus(firstNum, secondNum);
	}
}

//*NUMBERS
const numbers = document.querySelectorAll('.numbers');
numbers.forEach((number) => {
	number.addEventListener('click', () => {
		displayValue = displayValue + String(number.textContent);

		display.textContent = displayValue;
	});
});

//*OPERATIONS
const operations = document.querySelectorAll('.operations');
operations.forEach((operation) => {
	operation.addEventListener('click', () => {
		if (firstNum === undefined) {
			firstNum = displayValue;
		}

		operator = operation.textContent;
		display.textContent = operation.textContent;
		displayValue = '';
	});
});

//*EQUALS
const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
	secondNum = displayValue;
	// Check if secondNum is a valid number
	if (parseFloat(secondNum) === 0 && operator === '/') {
		window.location.href =
			'https://i.kym-cdn.com/photos/images/original/001/734/672/7a0.jpg';
	} else if (!isNaN(parseFloat(secondNum))) {
		display.textContent = operate(
			parseFloat(firstNum),
			parseFloat(secondNum),
			operator
		).toFixed(3);
		firstNum = display.textContent;
		secondNum = '';
	}
});

//*CLEAR
const ac = document.querySelector('#ac');
ac.addEventListener('click', () => {
	display.textContent = '';
	displayValue = '';
	firstNum = undefined;
	operator = '';
});
