const findMissingNumber=(arr)=> {
  const n = 45; // Number of elements in the original array
  const expectedSum = (n * (n + 1)) / 2; // Sum of the first n natural numbers

  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  const missingNumber = expectedSum - actualSum;
  return missingNumber;
}

// Example :
const numbersArray = [1, 2, 3, /* .......... */, 44, 45]; // Array of first 45 numbers with one missing number
const missingNumber = findMissingNumber(numbersArray);
console.log("Missing number:", missingNumber);