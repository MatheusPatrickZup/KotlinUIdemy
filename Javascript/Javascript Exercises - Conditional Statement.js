// JavaScript – Conditional Statement: switch

/* Q1. Write a program to print the number of days in a month using a switch case. Change
the value of monthNumber and check if your code works fine. */

function printMonthInformation(monthNumber) {
	if (monthNumber < 1 || monthNumber > 12) {
		throw Exception("Invalid month number!");
	}

	console.log("Month: " + getMonthName(monthNumber));
	console.log("Total number of days: " + getMonthDayQuantity(monthNumber));
}

function getMonthName(monthNumber) {
	var monthNames = {
		1: 'January',
		2: 'February',
		3: 'March',
		4: 'April',
		5: 'May',
		6: 'June',
		7: 'July',
		8: 'August',
		9: 'September',
		10: 'October',
		11: 'November',
		12: 'December'
	}

	return monthNames[monthNumber];
}

function getMonthDayQuantity(monthNumber) {
	switch (monthNumber) {
		case 4:
		case 6:
		case 9:
		case 11:
			return 30;
		case 2:
			return 28;
		default:
			return 31;
	}
}

console.log("\n");
console.log("Write a program to print the number of days in a month using a switch case. Change the value of monthNumber and check if your code works fine.");
printMonthInformation(3);
printMonthInformation(2);
printMonthInformation(1);


/* Q2. Write a program to check vowel or consonant using switch case. Change the value
of enteredAlphabet and check if your code works fine. */

function printVowelOrConstant(letter) {
	console.log("The letter " + letter + " is a " + getIsVowelOrConstant(letter));
}

function getIsVowelOrConstant(letter) {
	var upperLetter = letter.toUpperCase();
	
	switch (upperLetter) {
		case 'A':
		case 'E':
		case 'I':
		case 'O':
		case 'U':
			return 'vowel';
		default:
			return 'consonant';
	}
}

console.log("\n");
console.log("Q2. Write a program to check vowel or consonant using switch case. Change the value of enteredAlphabet and check if your code works fine.");
printVowelOrConstant('A');
printVowelOrConstant('a');
printVowelOrConstant('b');
printVowelOrConstant('B');

/* Q3. Write a program to check even or odd number using switch case. Change the value
of enteredNumber and check if your code works fine. */

function printNumberIsEvenOrOdd(number) {
	console.log("The number "+number+" is "+ getNumberIsEvenOrOdd(number) + ".");
}

function getNumberIsEvenOrOdd(number) {
	return number % 2 === 0 ? "even" : "odd";
}

console.log("\n");
console.log("Q3. Write a program to check even or odd number using switch case. Change the value of enteredNumber and check if your code works fine.");
printNumberIsEvenOrOdd(2);
printNumberIsEvenOrOdd(9);
printNumberIsEvenOrOdd(0);
printNumberIsEvenOrOdd(-23);