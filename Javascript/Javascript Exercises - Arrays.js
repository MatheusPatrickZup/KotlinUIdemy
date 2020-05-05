/* Q1. Write a JavaScript program to find the longest string from a given array. */

function printLongestString(data) {
	var biggestString = "";

	data.forEach(function(string) {
		if (string.length > biggestString.length) {
			biggestString = string;
		}
	})

	console.log("The biggest string is '" + biggestString + "'' with a length of " + biggestString.length + ".");
}

console.log("\n");
console.log("Q1. Write a JavaScript program to find the longest string from a given array.");
printLongestString(['asdf', 'sd', 'something','right','position']);


/* Q2. Write a JavaScript program to remove '0', false, undefined, null, NaN, '' from given
array. */

function removeInvalidValues(data) {
	// .filter(Boolean) filters all 'falsy' values
	return data.filter(Boolean);
}

console.log("\n");
console.log("Q2. Write a JavaScript program to remove '0', false, undefined, null, NaN, '' from given array.");

var arrayWithInvalidValues = [NaN, 0, 15, false, -22, '',undefined, 47, null, 94];
var filteredArray = removeInvalidValues(arrayWithInvalidValues);
console.log(filteredArray);


/* Q3. Write a JavaScript code to divide a given array of positive integers into two parts.
First element goes to first part, second element goes to second part, and third element
goes to first part and so on.
Now compute the sum of two parts and store into an array of size two. */

function arrayDivider(data) {
	var firstPart = data.filter(function(value, key) {
		return key % 2 == 0;
	});

	var secondPart = data.filter(function(value, key) {
		return key % 2 == 1;
	});

	const sum = (accumulator, currentValue) => accumulator + currentValue;

	return [
		firstPart.reduce(sum),
		secondPart.reduce(sum),
	];
}

console.log("\n");
console.log("Q3. Write a JavaScript code to divide a given array of positive integers into two parts.");
console.log("First element goes to first part, second element goes to second part, and third element goes to first part and so on.");
console.log("Now compute the sum of two parts and store into an array of size two.");
console.log(arrayDivider([1, 3, 6, 2, 5, 10]));


/* Q4. Write a JavaScript program to check whether there is at least one element which
occurs in two given sorted arrays of integers */
function verifyMutualExistance(firstArray, secondArray) {
	var exists = false;

	firstArray.forEach(function(arrayMember) {
		if (secondArray.indexOf(arrayMember) != -1) {
			exists = true;
		}
	});

	console.log(exists);
}

console.log("\n");
console.log("Write a JavaScript program to check whether there is at least one element which occurs in two given sorted arrays of integers.");
verifyMutualExistance([1,2,3], [3,4,5]);
verifyMutualExistance([1,2,3], [4,5,6]);


/* Q5. Write a JavaScript function to find the difference of two arrays. */
function findDifferenceBetweenArrays(firstArray, secondArray) {
	var firstDifferences = firstArray.filter(function (value) {
		return secondArray.indexOf(value) == -1;
	});

	var secondDifferences = secondArray.filter(function(value) {
		return firstArray.indexOf(value) == -1;
	});

	console.log(firstDifferences.concat(secondDifferences));
}

console.log("\n");
console.log("Q5. Write a JavaScript function to find the difference of two arrays.");
findDifferenceBetweenArrays([1, 2, 3], [100, 2, 1, 10]);