
function filterEvenNumbers(arr) {
    return arr.filter(num => num %2==0);
}

function sumOfArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}


function sortAndConcat(arr1, arr2) {
    return arr1.sort((a, b) => a - b).concat(arr2.sort((a, b) => a - b));
}

// Sample input arrays
const array1 = [5, 2, 9, 8, 1];
const array2 = [4, 7, 6, 3, 10];

// Using the custom methods
const evenNumbers1 = filterEvenNumbers(array1);
const evenNumbers2 = filterEvenNumbers(array2);
const sum1 = sumOfArray(array1);
const sum2 = sumOfArray(array2);
const sortedConcatenatedArray = sortAndConcat(array1, array2);

// Output results
console.log("Filtered even numbers from array1:", evenNumbers1);
console.log("Filtered even numbers from array2:", evenNumbers2);
console.log("Sum of array1:", sum1);
console.log("Sum of array2:", sum2);
console.log("Sorted and concatenated array:", sortedConcatenatedArray);
