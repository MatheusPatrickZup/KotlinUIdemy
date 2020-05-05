/* Q1. Write a JavaScript program to create a new array by reversing the elements of given array */

function reverseArray(array) {
	return array.reverse();
}

console.log("\n");
console.log("Q1. Write a JavaScript program to create a new array by reversing the elements of given array.");
console.log(reverseArray([1, 'a', 2, 'b', 3, 'c', 6, 'd', 7, 'e', 8, 'f']));

/* Q2. Write a JavaScript program to check if there is at least one element which occurs in two given sorted arrays of integers */

function verifyMutualExistance(firstArray, secondArray) {
	var exists = false;

	firstArray.forEach(function(arrayMember) {
		if (secondArray.indexOf(arrayMember) != -1) {
			exists = true;
		}
	});

	console.log("Element found: " + (exists ? "Yes" : "No"));
}

console.log("\n");
console.log("Q2. Write a JavaScript program to check if there is at least one element which occurs in two given sorted arrays of integers.");
verifyMutualExistance([4, 11, 12, 23, 46, 65, 70, 73, 98], [7, 13, 25, 46, 58, 70, 84]);