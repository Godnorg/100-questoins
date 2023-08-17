// Problem 1: Declare an Array
function createArray() {
    const colors = ["red", "blue", "green"];
   return colors
}
console.log(createArray())

// Problem 2: Accessing Array Elements

function getFirstElement() {
    const fruits = ["apple", "banana", "pear"]
    return fruits[0];
 }
 console.log(getFirstElement())

 // Problem 3: Modifying Array Elements

 

 function changeThirdElement() {
    const fruits1 = ["apple", "banana", "pear"]
    let newElement = "orange"
    fruits1.splice(2, 1, newElement)
    return fruits1
 }

 console.log(changeThirdElement())

 // Problem 4: Array Length

 const fruits2 = ["apple", "banana", "pear"];
 function getArrayLength() {
    return fruits2.length
 }
 console.log(getArrayLength(fruits2))

 // Problem 5: Last Element in Array

 const fruits3 = ["apple", "banana", "pear"]
 function getLastElement() {
    let result = fruits3.splice(2)
    return result
 }

 console.log(getLastElement())

 // Problem 6: Add Element to Array

 const array = ["apple", "banana"];
 const element = "pear"
 function addElement() {
    array.push(element)
    return array
 }

 console.log(addElement())

 // Problem 7: Remove Element from Array

 const array1 = ["apple", "banana", "pear"];
 function removeLastElement() {
    array1.pop()
    return array1
 }
 console.log(removeLastElement())

 // Problem 8: Array Concatenation
const array2 = ["apple", "banana"]
const array3 = ["pear", "peach"]
 function concatenateArrays() {
    const combinedArray = array2.concat(array3);
    return combinedArray
 }

 console.log(concatenateArrays())
 
 // Problem 9: Find Element in Array

 const array4 = ["apple", "banana", "pear"]
 function findInArray() {
    let result = array4.includes("apple")
    return result
 }

 console.log(findInArray())

 // Problem 10: Array Filtering
 const array5 = [1, 5, 8, 2, 7]
 function filterGreaterThanFive() {
    let result = array5.filter(num => num > 5)
    return result
  }
  console.log(filterGreaterThanFive())
  
  // Problem 11: Sum of an Array

  const array6 = [1, 2, 3, 4, 5]
  function sumArray() {
    let sum = 0
    for (let i = 0; i < array6.length; i++) {
        sum += array6[i];
    }
    return sum
  }
  console.log(sumArray())
 
 // Problem 12: Array Sorting

 const array7 = [5, 2, 3, 1, 4]
 function sortArray() {
    array7.sort((a, b) => a - b)
    return array7
  }
  console.log(sortArray())

  // Problem 13: Array Reverse
  const array8 = [1, 2, 3, 4, 5]
  function reverseArray() {
    array8.reverse()
    return array8
  }
  console.log(reverseArray())

  // Problem 14: Array Mapping
const array9 = [1, 2, 3, 4, 5]
const newArray = array9.map(doubleArray)
  function doubleArray(num) {
    return num * 2
  }
  console.log(newArray)
  
  // Problem 15: Array Reduction
const array10 = [1, 2, 3, 4, 5]
  function multiplyArray() {
    let product = 1
    for (let i = 0; i < array10.length; i++) {
        product *= array10[i];
    }
    return product
  }

  console.log(multiplyArray())

  // Problem 16: Counting Occurrences
  
  function countOccurrences(array, element) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
         count++
      }
    }
    return count;
  }

  console.log(countOccurrences(["apple", "banana", "apple", "pear"], "apple"))

// Problem 17: Array of Objects

const array11 = [{"name": "John"}, {"name": "Jane"}, {"name": "Oliver"}]
function getNames() {
   return array11.map(obj => obj.name)
 }

 console.log(getNames())

 // Problem 18: Array Splicing

 const array12 = ["apple", "banana", "pear"]
 function removeElement(array, index) {
   array.splice(index, 1)
   return array
 }
 console.log(removeElement(array12, 1))
 
 // Problem 19: Merging Arrays

 function mergeArrays(array1, array2) {
   // Merge the arrays using the concat() method
   var mergedArray = array1.concat(array2);
   
   // Create a new Set from the merged array to remove duplicates
   var uniqueArray = Array.from(new Set(mergedArray));
   
   // Return the unique array
   return uniqueArray;
 }

 console.log(mergeArrays([1, 2, 3], [3, 4, 5]))

 // Problem 20: Sum of Even Numbers
 function sumEvenNumbers(array) {
   let sum = 0;
   for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
         sum += array[i];
      } 
   }
   return sum
 }
 console.log(sumEvenNumbers([1, 2, 3, 4, 5]))
 
 // Problem 21: Array Fill

 let filledArray = [];
 function fillArray(n, element) {
  for (let i = 0; i < n; i++) {
    filledArray = filledArray.concat(element);
  }
  return filledArray
 }
 console.log(fillArray(3, "apple"))

// Problem 22: Array Range

function createRange(start, end) {
  let rangedArray = [];
  for (let i = start; i <= end; i++) {
    rangedArray.push(i);
  }
  return rangedArray;
}
console.log(createRange(1, 5))

// Problem 23: Array Comparison

function arraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }

  for (let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]) {
      return false;
    }
  }
  return true
}

console.log(arraysEqual([1, 2, 3], [1, 2]))

// Problem 24: Count Array Elements

function countArrayElements(array) {
  let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
         count++
      }
    }
    return count
}

console.log(countArrayElements(["apple", "banana", "apple"], "apple", "banana"))

// Problem 25: Shuffle Array


function shuffleArray(array) {
  const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
  return shuffledArray;
}

console.log(shuffleArray([1, 2, 3, 4, 5]))

// Problem 26: Filter Strings

function filterStrings(array) {
  let filtered = [];
  for (let i = 0; i < array.length; i++) {
    if ( typeof array[i] !== "string") {
      filtered.push(array[i])
    }
  }
  return filtered
}

console.log(filterStrings([1, "two", 3, "four", 5]))

// Problem 27: Find Index in Array

function findIndex(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return array.indexOf(element)
    }
  }
  return -1;
}

console.log(findIndex(["apple", "banana", "pear"], "banana"))

// Problem 28: Find Maximum in Array

function findMax(array) {
  return Math.max(...array);
}

console.log(findMax([1, 2, 3, 4, 5]))

// Problem 29: Deep Copy Array

function deepCopy(array) {
  let deepCopyArray = JSON.parse(JSON.stringify(array))
  return deepCopyArray;
}

console.log(deepCopy([[1, 2, 3], [4, 5, 6]]))

// Problem 30: Flatten Array

function flatten(array) {
  const resultArray = [];

  function flattenHelper(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        // If the element is an array, call the helper function recursively
        flattenHelper(arr[i]);
      } else {
        // If the element is not an array, push it to the result array
        resultArray.push(arr[i]);
      }
    }
  }

  // Call the helper function to start the recursion
  flattenHelper(array);

  return resultArray;
}

console.log(flatten([[1, 2, 3], [4, 5, 6]]))

// Problem 31: Array Intersection

function getIntersection(array1, array2) {
  const newArray = array1.filter((num) => num > 3 && array2.includes(num));
  return newArray;
}

console.log(getIntersection([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]))

// Problem 32: Unique Elements

function getUniqueElements(array) {
  return Array.from(new Set(array));
}

console.log(getUniqueElements([1, 2, 2, 3, 3, 3]))

// Problem 33: Array Differences

function getDifference(array1, array2) {
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i])) {
      newArray.push(array1[i]);
    } 
  }
  return newArray;
}

console.log(getDifference([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));

// Problem 34: Remove Element

function removeElement(array, element) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== (element)) {
      newArray.push(array[i]);
    } 
  }
  return newArray;
}

console.log(removeElement([1, 2, 3, 4, 5], 3))

// Problem 35: Sum of Array Elements

function sumElements(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total;
}

console.log(sumElements([1, 2, 3, 4, 5]))

// Problem 36: Replace Element


  function replaceElement(array, element, newElement) {
    // Find the index of the element to be replaced
    let index = array.indexOf(element);
    
    // If the element is found in the array, replace it with the new element
    if (index !== -1) {
      array[index] = newElement;
    }
    
    // Return the updated array
    return array;
  }
  
  // Test the function
  console.log(replaceElement([1, 2, 3, 4, 5], 3, 10));  // Output: [1, 2, 10, 4, 5]

// Problem 37: Return Largest Numbers in Array

function largestNumbers(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
      let num = Math.max(...array[i]);
      newArray.push(num);
    
  }
  return newArray;
  
}

console.log(largestNumbers([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

// Problem 38: Return Strings Length

function stringsLength(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let text = array[i].length
    newArray.push(text)
  }
  return newArray;
}

console.log(stringsLength(["apple", "banana", "cherry"]))

// Problem 39: Find Longest String In Array

function findLongestString(array) {
  let first = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > first) {
      return array[i];
    }
  }
}

console.log(findLongestString(["apple", "banana", "cherry"]))

// Problem 40: Return Elements on Odd Positions

function oddPositionElements(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(oddPositionElements([1, 2, 3, 4, 5]))

// Problem 41: Calculate Average

function calculateAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  const average = sum / array.length
  return average;
}

console.log(calculateAverage([1, 2, 3, 4, 5]))

// Problem 42: Concatenate Arrays

// function concatenateArrays(array1, array2) {
//   return array1.concat(array2);
// }

// console.log(concatenateArrays([1, 2, 3], [4, 5, 6]));

// Can't do this code because it says .concat is undefined (the code is correct)

// Problem 43: Find Second Lowest Number

function findSecondLowest(array) {
  let lowest = 6;
  let secondLowest = 6;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < lowest) {
      secondLowest = lowest;
      lowest = array[i];
    } else if (array[i] < secondLowest && array[i] !== lowest) {
      secondLowest = array[i];
    }
  }
  return secondLowest;
}

console.log(findSecondLowest([1, 2, 3, 4, 5]));

// Problem 44: Find Second Largest

function findSecondLargest(array) {
  let highest = 0;
  let secondHighest = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > highest) {
      secondHighest = highest;
      highest = array[i]
    } else if (array[i] > secondHighest && array[i] !== highest) {
      secondHighest = array[i]
    }
  }
  return secondHighest;
}

console.log(findSecondLargest([1, 2, 3, 4, 5]))

// Problem 45: Check Palindrome

function isPalindrome(array) {
  for (let i = 0; i < array.length / 2; i++) {
    if (array[i] !== array[array.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(['a', 'b', 'b', 'a']))

// Problem 46: Remove Falsy Values

function removeFalsy(array) {
  let newArray = array.filter(Boolean);
  return newArray;
}

console.log(removeFalsy([1, 0, 'apple', '', undefined, 'banana']))

// Problem 47: Array Sorting

// function sortArray(array) {
//   let newArray = array.sort();
//   return newArray;
// }

// console.log(sortArray([5, 3, 1, 4, 2]));

// Can't do this one as well because it says that sort is undefined

// Problem 48: String Reversal

function reverseString(array) {
  let newArray = array.reverse();
  return newArray;
}

console.log(reverseString(['a', 'b', 'c', 'd', 'e']))

// Problem 49: Compare Numbers

function compareNumbers(a, b) {
  return a - b
};

let array23 = [5, 10, 1, 20];
array23.sort(compareNumbers);

console.log(array23)

// Problem 50: Find Element by Property

function findByProperty(array, prop, value) {
  return array.find(obj => obj[prop] === value);
}

console.log(findByProperty([{name: "apple", weight: 5}, {name: "banana", weight: 6}], "name", "banana"))

// Problem 51: Sqaure Root Array

function sqrtArray(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let result = Math.sqrt(array[i]);
    newArray.push(result)
  }
  return newArray;
}

console.log(sqrtArray([1, 4, 9, 16]))

// Problem 52: Check if Array includes Element

function includesElement(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array.includes(element)) {
      return true
    }
  }
}

console.log(includesElement([1, 2, 3, 4, 5], 3))

// Problem 53: Check if all Elements are the Same

function allSame(array) {
  let first = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] === first) {
      return true;
    }
  }
}

console.log(allSame(["apple", "apple", "apple"]))

// Problem 54: Factorialize a Number

function factorialize(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialize(5))

// Problem 55: Find Index of Smallest Element

function findIndexOfSmallest(array) {
  let smallest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    } 
  }
  
  let findingIndex = array.indexOf(smallest);
  return findingIndex;
}

console.log(findIndexOfSmallest([2, 3, 1, 4, 5]))

// Problem 56: Array Symmetric Difference

function symmetricDifference(array1, array2) {
  let newArray = [];
  let j = 0;
  for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[j]) {
        newArray.push(array1[i]);
        array2[j]++;
      } 
  }
  return newArray;
}

console.log(symmetricDifference([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]))

// Problem 57: Filter Array by Word Length

function filterByWordLength(array, length) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length === length) {
      newArray.push(array[i])
    }
  }
  return newArray;
}

console.log(filterByWordLength(["apple", "pear", "kiwi", "banana"], 4))

// Problem 58: Map String Lengths

function mapStringLengths(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let length = array[i].length;
    newArray.push(length);
  }
  return newArray;
}

console.log(mapStringLengths(["apple", "pear", "kiwi", "banana"]))

// Problem 59: Sum Odd Fibonacci Numbers

function sumFibs(num) {
  let prev = 0;
  let current = 1;
  let sum = 0;

  while (current <= num) {
    if (current % 2 !== 0) {
      sum += current;
    }

    const next = prev + current;
    prev = current;
    current = next;
  }

  return sum;
}

console.log(sumFibs(10))

// Problem 60: Sum all Primes

function sumPrimes(num) {
  let sum = 0;

  // Helper function to check if a number is prime
  function isPrime(number) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return number > 1;
  }

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumPrimes(10));

// Problem 61: Prime Numbers in Array


  function getPrimes(array) {
    var primes = [];
  
    for (var i = 0; i < array.length; i++) {
      var number = array[i];
      var isPrime = true;
  
      if (number < 2) {
        isPrime = false;
      } else {
        for (var j = 2; j <= Math.sqrt(number); j++) {
          if (number % j === 0) {
            isPrime = false;
            break;
          }
        }
      }
  
      if (isPrime) {
        primes.push(number);
      }
    }
  
    return primes;
  }

console.log(getPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// Problem 62: Array Flatten

function flatten(array) {
  if (!Array.isArray(array)) {
    return array;
  }
  
  // Recursive case: iterate through each element in the array
  // and flatten it using recursion
  let flattened = [];
  for (let i = 0; i < array.length; i++) {
    flattened = flattened.concat(flatten(array[i]));
  }
  
  return flattened;
}


console.log(flatten([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

// Problem 63: Filter Array

function filterArray(array, callback) {
   let newArray = array.filter(callback)
   return newArray;
}

console.log(filterArray([1, 2, 3, 4, 5], function(num){ return num % 2 === 0; }));

// Problem 64: Check if Array is Sorted

function isSorted(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false
    }
  }
  return true
}

console.log(isSorted([1, 2, 3, 4, 5]))

// // Problem 65: Array Element Multiplication (doesn't work for some reason)

// function multiplyArray(array, multiplier) {
//   let newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     let newNumber = array[i] * multiplier;
//     newArray.push(newNumber);
//   }
//   return newArray;
// }

// console.log(multiplyArray([1, 2, 3, 4, 5], 2))

// Problem 66: Count instances of value in array

function countInstances(array, value) {
  let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        count++
      }
    }
  return count
}

console.log(countInstances([1, 1, 2, 2, 2, 3, 3, 3, 3], 3))

// Problem 67: Merge Arrays

function mergeArrays(arr1, arr2) {
  let mergedArray = arr1.concat(arr2);
  mergedArray.sort((a, b) => a - b);
  return mergedArray;
}

console.log(mergeArrays([3, 2, 1], [6, 5, 4]))

// Problem 68: Shift Array Elements

function shiftElements(array) {
  let first = array.shift()
  array.push(first);
  return array;
}

console.log(shiftElements([1, 2, 3, 4, 5]))

// Problem 69: Count Occurrences of Each Element in Array

function countOccurrences(array) {
  let appleCount = 0;
  let bananaCount = 0;
  let orangeCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'apple') {
      appleCount++
    } else if (array[i] === 'banana') {
      bananaCount++
    } else if (array[i] === 'orange') {
      orangeCount++
    }
  }
  let obj = {
    apple: appleCount,
    banana: bananaCount,
    orange: orangeCount
  }

  return obj;
}

console.log(countOccurrences(['apple', 'banana', 'apple', 'orange', 'banana', 'orange', 'orange']))

// Problem 70: Splice and Slice

function spliceAndSlice(array, index, amount, insert) {
  array.splice(index, amount, ...insert); // Replace elements at specified index with elements in insert array
  return array;
}

console.log(spliceAndSlice([1, 2, 3, 4, 5], 2, 2, ['a', 'b', 'c']));

// Problem 71: Create Range Array

function createRange(start, end) {
  let newArray = [];
  for (let i = start; i <= end; i++) {
    newArray.push(i);
  }
  return newArray;
}

console.log(createRange(5, 9))

// Problem 72: Last Element in Array

function lastElement(array) {
 return array[array.length - 1]
}

console.log(lastElement([1, 2, 3, 4, 5]))

// Problem 73: Extract Unique Values

function uniqueValues(array) {
 // Create an empty Set to store unique values
 let uniqueSet = new Set();

 // Iterate through the input array
 for (let i = 0; i < array.length; i++) {
   // Add each element to the Set
   uniqueSet.add(array[i]);
 }

 // Convert the Set back to an array
 let uniqueArray = Array.from(uniqueSet);

 return uniqueArray;
}

console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5, 5]))

// Problem 74: Repeat String

function repeatString(string, times) {
  return string.repeat(times);
}

console.log(repeatString('apple', 3))

// Problem 75: Palindrome Strings

function isPalindromeString(string) {
    // Convert the string to lowercase for case-insensitive comparison
    string = string.toLowerCase();
  
    // Reverse the string
    let reversedString = string.split('').reverse().join('');
    
    // Compare the string with its reversed version
    return string === reversedString;
}

console.log(isPalindromeString('madam'))

// Problem 76: Pig Latin Strings

function pigLatin(string) {
  let substrings = string.split(" ")
  let newArray = [];
  for (let i = 0; i < substrings.length; i++) {
   let current = substrings[i];
   let removed = current.slice(1);
   let word = removed + current[0] + 'ay';
   newArray.push(word)
  }
  return newArray.join(" ");
}

console.log(pigLatin('pig latin translator'))

// Problem 77: Longest String in Array

function longestString(array) {
  let newArray = [];
  let chosen = array[0];
  for (let i = 1; i < array.length; i++) {
      if (chosen.length < array[i].length) {
        chosen = array[i];
      } 
  }
  return chosen;
}

console.log(longestString(['short', 'medium', 'longest', 'longer']))

// Problem 78: Find Average of Array

function findAverage(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let result = sum / array.length; 
    return result;
}

console.log(findAverage([1, 2, 3, 4, 5]))

// Problem 79: Find Missing Number in an Array

function findMissing(array) {
  // Calculate the sum of the numbers from 1 to n
  const n = array.length + 1;
  const sumOfNumbers = (n * (n + 1)) / 2;

  // Calculate the sum of the numbers in the array
  const sumOfArray = array.reduce((sum, num) => sum + num, 0);

  // The missing number is the difference between the sum of numbers and the sum of array
  const missingNumber = sumOfNumbers - sumOfArray;

  return missingNumber;
}

console.log(findMissing([1, 2, 4, 5]))

// Problem 80: Return Largest Numbers in Array

function largestInSubArray(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let chosen = array[i][0];
    for (let j = 1; j < array[i].length; j++) {
      if (chosen < array[i][j]) {
        chosen = array[i][j];
      }
    }
    newArray.push(chosen);
  }
  return newArray;
}

console.log(largestInSubArray([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

// Problem 81: Reverse Array in Place

function reverseInPlace(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    // Swap the elements at left and right indices
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;

    // Move the left and right pointers towards the center
    left++;
    right--;
  }

  return array;
}

console.log(reverseInPlace([1, 2, 3, 4, 5]))

// Problem 82: Sum All Numbers in Array

function sumAll(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(sumAll([1, 2, 3, 4, 5]))

// Problem 83: Find Longest Word Length

function findLongestWordLength(string) {
  let result = string.split(" ");
  let first = result[0];
  for (let i = 0; i < result.length; i++) {
    if (first.length < result[i].length) {
        first = result[i];
    }
  }
  return first.length;
}

console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'))

// Problem 84: Replace Element in Array

function replaceElement(array, element, replacement) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      array[i] = replacement;
    }
  }
  return array;
}

console.log(replaceElement([1, 2, 3, 2, 1], 1, 'one'))

// Problem 85: Square Array in Place

function squareInPlace(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * array[i];
  }
  return array;
}

console.log(squareInPlace([1, 2, 3, 4, 5]))

// Problem 86: Find Maximum Value in Array

function findMax(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

console.log(findMax([1, 2, 3, 4, 5]))

// Problem 87: Convert Celsius to Fahrenheit

function convertToFahrenheit(celsius) {
  let newTemperature = celsius * 9/5 + 32
  return newTemperature;
}

console.log(convertToFahrenheit(30))

// Problem 88: Caesar Cipher

function caesarCipher(text, shift) {
   // Create an array of all the letters in the alphabet
   const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

   // Convert the text to lowercase
   text = text.toLowerCase();
 
   let result = '';
 
   // Iterate over each character in the text
   for (let i = 0; i < text.length; i++) {
     const currentChar = text[i];
 
     // Check if the current character is a letter
     if (alphabet.includes(currentChar)) {
       // Find the index of the current character in the alphabet array
       const currentIndex = alphabet.indexOf(currentChar);
 
       // Calculate the new index after applying the shift
       const newIndex = (currentIndex + shift) % alphabet.length;
 
       // Get the new character from the alphabet array using the new index
       const newChar = alphabet[newIndex];
 
       // Add the new character to the result string
       result += newChar;
     } else {
       // If the current character is not a letter, add it as is to the result string
       result += currentChar;
     }
   }
 
   return result;
 }

console.log(caesarCipher('abc', 1))

// Problem 89: Title Case a Sentence

function titleCase(sentence) {
  let result = sentence.split(" ");
  for (let i = 0; i < result.length; i++) {
    let word = result[i];
    let upperCase = word[0].toUpperCase() + word.slice(1);
    result[i] = upperCase;
  }

  let newSentence = result.join(" ");
  return newSentence;
}

console.log(titleCase("i'm a little tea pot"))

// Problem 90: Counting Cards

function countCards(cardSequence) {
  let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let low = cards.slice(0, 5);
  let high = cards.slice(8, 13);
  let neutral = cards.slice(5, 8);
  let count = 0;
  for (let i = 0; i < cardSequence.length; i++) {
    for (let k = 0; k < high.length; k++) {
      if (cardSequence[i] === high[k]) {
        count--
      }
    }
    for (let j = 0; j < low.length; j++) {
      if (cardSequence[i] === low[j]) {
        count++
      }
    }
  }
  
  if (count > 0) {
    let result = count + ' ' + 'Bet';
    return result;
  } else if (count <= 0) {
    let result1 = count + ' ' + 'Hold';
    return result1;
  }
}

console.log(countCards(['A', '3', 'K', '7', '5', '8', '9']));

// Problem 91: Validate US Telephone Numbers

function validateUSTelephoneNumber(number) {
  // Regular expression pattern to match a US telephone number
  var pattern = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;

  // Test if the number matches the pattern
  return pattern.test(number);
}

console.log(validateUSTelephoneNumber('555-555-5555'))

// Problem 92: DNA pairing

function pairElement(str) {
  let newArray = [];
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'G') {
      newArray.push(['G', 'C']);
    }
    if (str[i] === 'C') {
      newArray.push(['C', 'G']);
    }
    if (str[i] === 'A') {
      newArray.push(['A', 'T']);
    }
    if (str[i] === 'T') {
      newArray.push(['T', 'A']);
    }
  }
  return newArray;
}


console.log(pairElement('GCG'))

// Problem 93: Missing Letters

function missingLetters(str) {
  let letters = str.split(''); // Convert the input string into an array of characters

  for (let i = 0; i < letters.length - 1; i++) {
    if (letters[i].charCodeAt() + 1 !== letters[i + 1].charCodeAt()) {
      return String.fromCharCode(letters[i].charCodeAt() + 1);
    }
  }

  return undefined;
}

console.log(missingLetters('abce'))

// Problem 94: Sorted Union

function uniteUnique(arr) {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      uniqueArray.push(arr[i][j])
    }
  }
  
  let newArray = Array.from(new Set(uniqueArray))
  return newArray;
  
}

console.log(uniteUnique([[1, 3, 2], [5, 2, 1, 4], [2, 1]]))

// Problem 95: Convert HTMl entities

function convertEntities(str) {
  str = str.replace(/&/g, "&amp;");
  str = str.replace(/</g, "&lt;");
  str = str.replace(/>/g, "&gt;");
  str = str.replace(/"/g, "&quot;");
  str = str.replace(/'/g, "&apos;");
  
  return str;
}

console.log(convertEntities('Dolce & Gabbana'))

// Problem 96: Spinal Tap Case

function spinalCase(str) {
  let result = str.toLowerCase();
  let secondResult = result.replace(/\s+/g, '-');
  return secondResult;
}

console.log(spinalCase('This Is Spinal Tap'))

// Problem 97: Pig Latin

function translatePigLatin(str) {
  let result = str.slice(0, 1) && str.concat(str.slice(0, 1));
  let secondResult = result.substring(1)
  return secondResult.concat('ay')
}

console.log(translatePigLatin('california'))

// Problem 98: Search and Replace

function myReplace(str, before, after) {
  let arr = str.split(' ')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === before) {
      let index = before.indexOf();
      arr.splice(index, 1, after);
    }
  }
  let text = arr.join(' ');
  return text;
}


console.log(myReplace('Let us go to the store', 'store', 'mall'))

// Problem 99: Binary Agents

function binaryAgent(str) {
  let result =  str.split(' ')
  let secondResult = result.map(elem => parseInt(elem,2));
  let thirdResult = secondResult.map(elem => String.fromCharCode(elem));
  let fourthResult = thirdResult.join('');
  return fourthResult;
  
}

console.log(binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00111111'))


// Problem 100: Everything be True

function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++) {
    return collection[i].hasOwnProperty(pre);
  }
}

console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }], "sex"))

// For this problem you could also do:

// function truthCheck(collection, pre) {
//   return collection.every(element => Boolean(element[pre]));
// }

// Explanation:

// Define the truthCheck function with two parameters: collection and pre.
// Use the every() method on the collection array to iterate through each element.
// In the callback function, access the pre property of each element using dot notation (element[pre]).
// Check if the pre property is truthy using the Boolean function (Boolean(element[pre])).
// Return the result of the every() method.


