
// Define a function fibonacci that takes two parameters: n and array.
// If n is less than or equal to 2, return array.  This is done because the base of the array is 2 numbers
// If array is not provided, initialize it with the first two Fibonacci numbers [0, 1].
// Calculate the next Fibonacci number by adding the last two numbers in array.
// Append the calculated number to array.
// Recursively call the fibonacci function with n - 1 and the updated array.
// Return the result of the recursive call.

function fibonacci(n, array) {
  if (n <= 2) return array ;
    if (!array) array = [0, 1];
    array.push(array[array.length - 1] + array[array.length - 2]);
    return fibonacci(n - 1, array);
}

fibonacci(10); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



// Have an array of unsorted numbers, and sorted numbers
// get length of unsorted numbers
// if length of unsorted numbers is = 1 then return sorted numbers array
// if length of list is greater than 1 
// iterate through the list of unsorted numbers and get the smallest value
// push that number to sorted array
// remove that number from unsorted array 
// return back unsorted numbers, and sorted numbers


const numbers = [5, 3, 8, 1, 2, 0, 13, 1];

function selectionSort(unsorted, sorted) {
  if (unsorted.length === 0) return sorted;
  let smallest = unsorted[0];
  let index = 0;
  for (let i = 0; i < unsorted.length; i++) {
    if (unsorted[i] < smallest) {
      smallest = unsorted[i];
      index = i;
    }
  }
  sorted.push(smallest);
  unsorted.splice(index, 1);
  return selectionSort(unsorted, sorted);
}

selectionSort(numbers, []); // [0, 1, 1, 2, 3, 5, 8, 13]
