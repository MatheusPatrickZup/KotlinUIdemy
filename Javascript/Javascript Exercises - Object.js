// Object used in various exercises
var student = {
	name: "David Rayy",
	sclass: "VI",
	rollno: 12
};

/* Q1. We have an object of customers for our food delivery app with the information
about their past orders with order values.
Write a JavaScript program to give a "Premium Membership" to the customer if the
customer has made at least 5 orders of the minimum value of 20. */

function printPremiumCustomers() {
	// Data given by the exercise
	var customers_data = {
		'Ben10': [22, 30, 11, 17, 15, 52, 27, 12],
		'Sameer': [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
		'Zeeshan': [22, 30, 11, 5, 17, 30, 6, 57]
	};

	var premiumCustomers = getPremiumCustomers(customers_data);

	if (!premiumCustomers || premiumCustomers.length === 0) {
		console.log("There are no premium users in the list!");
		return;
	}

	console.log("Premium users: \n");
	premiumCustomers.map(function(premiumCustomer) {
		console.log(" - " + premiumCustomer);
	})
}

function getPremiumCustomers(customersData) {
	return Object.keys(customers_data).filter(function(customer) {
		var quantityOfOrders = getQuantityOfOrdersWithMinimumValue(customers_data[customer], 20);
		
		if (quantityOfOrders >= 5) {
			return true;
		}
	})
}

function getQuantityOfOrdersWithMinimumValue(orderData, minimumValue) {
	var filteredOrderArray = orderData.filter(function(order) {
		if (order >= minimumValue) {
			return order;
		}
	})

	return filteredOrderArray.length;
}

console.log("\n");
console.log("Q1. We have an object of customers for our food delivery app with the information about their past orders with order values.");
console.log("Write a JavaScript program to give a \"Premium Membership\" to the customer if the customer has made at least 5 orders of the minimum value of 20.");
printPremiumCustomers();

/* Q2. Write a JavaScript program to list the properties of a JavaScript object. */

function getObjectProperties(object) {
	console.log(JSON.stringify(Object.keys(object)));
}

console.log("\n");
console.log("Q2. Write a JavaScript program to list the properties of a JavaScript object.");
getObjectProperties(student);

/* Q3. Write a JavaScript program to delete the rollno property from the following object.
Also print the object before or after deleting the property */

function deleteObjectProperty(object, propertyName) {
	delete object[propertyName];
	return object;
}

console.log("\n");
console.log("Q3. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property");
console.log(student);
console.log("deleting..");
deleteObjectProperty(student, "rollno");
console.log(student);

/* Q4. Write a JavaScript program to get the length of a JavaScript object. */

function printObjectLength(object) {
	var objectLength = Object.keys(object).length;
	console.log("The length of the object is " + objectLength + ".");
}

console.log("Q4. Write a JavaScript program to get the length of a JavaScript object.");
printObjectLength(student);

/* Q5. Write a JavaScript program to display the reading status (i.e. display book name,
author name and reading status) of the following books. */

var library = [
	{
		author: 'Bill Gates',
		title: 'The Road Ahead',
		readingStatus: true
	},
	{
		author: 'Steve Jobs',
		title: 'Walter Isaacson',
		readingStatus: true
	},
	{
		author: 'Suzanne Collins',
		title: 'Mockingjay: The Final Book of The Hunger Games',
		readingStatus: false
	}
];

function printLibraryReadingStatus(library) {
	Object.keys(library).map(function(bookIndex) {
		printBookReadingStatus(library[bookIndex]);
	});
}

function printBookReadingStatus(book) {
	var bookInfo = book.title + " by " + book.author;

	if (book.readingStatus) {
		console.log("You have already read " + bookInfo + ".");
	} else {
		console.log("You still need to read " + bookInfo + ".");
	}
}

console.log("\n");
console.log("Q5. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.");
printLibraryReadingStatus(library);