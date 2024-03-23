// Functions

// 1. Function to check if a string is a palindrome
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// 2. Arrow function to multiply a number by two
const multiplyByTwo = (num) => num * 2;

// 3. Function to calculate the average of an array of numbers
function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

// 4. Function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Control Flow

// 5. Conditional statement to check if a number is positive, negative, or zero
function checkNumber(num) {
    if (num > 0) {
        console.log("The number is positive");
    } else if (num < 0) {
        console.log("The number is negative");
    } else {
        console.log("The number is zero");
    }
}

// 6. Switch statement to determine if a day is a weekday or weekend
function checkDay(day) {
    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            console.log("It's a weekday");
            break;
        case 'Saturday':
        case 'Sunday':
            console.log("It's a weekend");
            break;
        default:
            console.log("Invalid day");
    }
}

// Loops

// 7. For loop to print even numbers from 1 to 20
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// 8. While loop to count down from 10 to 1
let countdown = 10;
while (countdown > 0) {
    console.log(countdown);
    countdown--;
}

// 9. Do-while loop to prompt the user for a positive number
let userInput;
do {
    userInput = parseInt(prompt("Enter a positive number:"));
} while (isNaN(userInput) || userInput <= 0);

// Arrays

// 10. Sample array of fruits
const fruits = ['apple', 'banana', 'orange', 'grapes'];

// Using forEach to log each fruit to the console
fruits.forEach(fruit => console.log(fruit));

// 11. Function to find the maximum value in an array
function findMax(numbers) {
    return Math.max(...numbers);
}

// 12. Using map to double each element in an array
const numbersArray = [1, 2, 3, 4, 5];
const doubledNumbers = numbersArray.map(num => num * 2);

// 13. Function to remove duplicate elements from an array
function removeDuplicates(array) {
    return [...new Set(array)];
}

// 14. Function to merge two arrays and remove duplicates
function mergeArrays(arr1, arr2) {
    return removeDuplicates([...arr1, ...arr2]);
}

// 15. Using filter to create a new array with only even numbers
const numbersArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbersArray2.filter(num => num % 2 === 0);
