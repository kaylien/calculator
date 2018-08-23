var numbers = document.getElementsByClassName("number");
var operators = document.getElementsByClassName("operator");
var equal = document.getElementById("equal");
var clearButton = document.getElementById("clear");
var form = document.getElementById("input-box");
var num1, num2;
var answer = 0;
var operator;

for(var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", retrieveValues);
}

/****/
for(var j = 0; j < operators.length; j++) {
	operators[j].addEventListener("click", retrieveOperator);
}

equal.addEventListener("click", solve);
clearButton.addEventListener("click", clear);


function retrieveValues() {
	form.value += this.innerText;

	if (!(answer == 0)) {
		answer = 0;
		form.value = this.innerText;
	}
}

function retrieveOperator() {
	num1 = form.value;
	operator = this.innerText;

	form.value = "";
}

function solve() {
	num2 = form.value;
	num1 = operate(parseInt(num1), parseInt(num2), operator);
	form.value = num1;
	answer = num1;
}

function clear() {
	num1 = num2 = 0;
	form.value = "";
}

function operate(num1, num2, operator) {
	if 		(operator == '+') { return add(num1, num2); }
	else if (operator == '-') { return subtract(num1, num2); }
	else if (operator == '*') { return multiply(num1, num2); }
	else if (operator == '/') { return divide(num1, num2); }
}

function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	if (num2 == 0) { 
		return "yo u can't divide by 0"; 
	};

	return Math.round((num1 / num2) * 10000) / 10000;
}