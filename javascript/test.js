// 1. Write a function that reverses a given string.
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Hello"));

//2. Write a function that finds the longest word in a sentence.
function longestWord(sentence) {
  const word = sentence.split(" ");
  let longWord = "";

  for (let i = 0; i < word.length; i++) {
    if (word[i].length > longWord.length) {
      longWord = word[i];
    }
  }
  return longWord;
}

console.log(longestWord("Hello this is basavaraj"));

// 3. remove duplicate from the array

function duplicateArray(arr) {
  return [...new Set(arr)];
}
console.log(duplicateArray([1, 2, 3, 4, 5, 1, 2, 5]));

// 4. Given an array containing numbers from 1 to N, with one number missing, find the missing number

function findMissingNumber(num) {
  const n = num.length + 1;
  const sum = (n * (n + 1)) / 2;
  const arrSum = num.reduce((acc, curr) => acc + curr, 0);
  return sum - arrSum;
}
console.log(findMissingNumber([1, 2, 3, 5]));

// 5. Write a function that checks if a given string is a palindrome.

function isPalindrome(number) {
  // Convert the number to a string
  const numString = number.toString();

  // Reverse the string
  const reversedString = numString.split("").reverse().join("");

  // Check if the original string is the same as the reversed string
  return numString === reversedString;
}

// Examples
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(12321)); // Output: true
console.log(isPalindrome(12345)); // Output: false

//.6 prime numbers

function isPrime(n) {
  if (n < 2) {
    return `${n} is not a prime number`;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return `${n} is not a prime number `;
    }
  }
  return `${n} is a prime number `;
}

console.log(isPrime(21));
