//*Functions by specific operations - they get called by the main function
function add(firstNum, secondNum) {
	return firstNum + secondNum;
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

//*Variables for input - they go into the operate function
let firstNum;
let secondNum;
let operator;

//*Main function that calls functions for specific operations
function operate(firstNum, secondNum, operator) {
	switch (operator) {
		case '+':
			add(firstNum, secondNum);

		case '-':
			subtract(firstNum, secondNum);

		case '*':
			multiply(firstNum, secondNum);

		case '/':
			divide(firstNum, secondNum);
	}
}
