
/////////////////Program-1////////////////////////////
//--------Method-1-----------
function ReverseNumber(n) {
    let reverseNum = n.toString().split('').reverse().join('');
    return reverseNum;
}
//--------Method-2-----------
// function ReverseNumber(n){
//     let reverseNum=0;

//     while(n>0){
//        let reminder= n%10
//        reverseNum= reverseNum*10+ reminder
//        n= Math.floor(n/10) 
//     }
//     return reverseNum;
// }

/////////////////Program-2////////////////////////////

function checkPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

/////////////////Program-3////////////////////////////

// function Palindrome(str){
//     let arr = []
//     let len = str.length
//     for(let i=0; i<len; i++ ){
//         for(let j=0; )
//         output= str[i]
//     arr.push(output)
//     }
//     return arr;
// }

/////////////////Program-4////////////////////////////

function alphabetOrder(str) {
    let output = str.split('').sort().join('');
    return output;
}

/////////////////Program-5////////////////////////////

function properCaseString(str) {
    let properStr = str.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join();
    return properStr;
}

/////////////////Program-6////////////////////////////

function findLongestWord(str) {

    let words = str.split(' ');
    let longestWord = ''

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]
        }
    }
    return longestWord;
}
/////////////////Program-7////////////////////////////

function findVowel(str) {
    let vowel = 'aeiou'
    let cleanStr = str.split('');
    let count = 0

    for (let i = 0; i < cleanStr.length; i++) {
        if (vowel.includes(cleanStr[i])) {
            count++
        }
    }
    return count;
}

/////////////////Program-8////////////////////////////

// function isPrime(num) {

//     if (num < 2) {
//         return false
//     }

//     for (let i = 0; i < Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
function isPrimeUsingRecursion(num, divisior = 2) {

    if (num < 2) {
        return false
    }

    if (divisior > Math.sqrt(num)) {
        return true
    }

    if (num % divisior === 0) {
        return false
    }

    return isPrimeUsingRecursion(num, divisior + 1);
}

///////////////Program-9////////////////////////////

function typeOfValue(value) {

    return typeof value;
}

///////////////Program-10////////////////////////////
function printNIdentityMatrix(n) {
    let arr = []

    for (let i = 0; i < n; i++) {
        arr[i] = [];

        for (let j = 0; j < n; j++) {
            if (i === j) {
                arr[i][j] = 1
            }
            else {
                arr[i][j] = 0
            }
        }
    }
    return arr;
}

///////////////Program-11////////////////////////////
function findSecondLowestAndSecondGreatest(arr) {
    let array = arr.sort((a, b) => a - b)
    let secondLowest = array[1]
    let secondGreatest = array[array.length - 2]

    return `${secondLowest}, ${secondGreatest}`;
}

///////////////Program-12////////////////////////////
//--------Method-1-----------
// function findPerfectNumber(num) {
//     let sum = 1

//     for (let i = 2; i <= num / 2; i++) {
//         if (num % i === 0) {
//             sum += i
//         }
//     }
//     return num === sum;
// }

//--------Method-2-----------

function findPerfectNumber(num) {
    let sum = 1

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i
            if (i !== num / i) {
                sum += num / i
            }
        }
    }
    return num === sum;
}

// console.log(findPerfectNumber(496))

///////////////Program-13////////////////////////////
function computeFactors(num) {
    if (num <= 0) {
        return "Please enter a positive integer.";
    }

    let factors = []

    for (let i = 0; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            factors.push(i);

            if (i !== num / i) {
                factors.push(num / i);
            }
        }
    }

    factors.sort((a, b) => a - b); // Sorting the factors in ascending order

    return factors;
}

//console.log(computeFactors(36)); // Output: [1, 2, 3, 4, 6, 9, 12, 18, 36]

///////////////Program-14////////////////////////////
// --------Method-1-----------
function amountToCoins(amount, coins) {

    if (amount === 0) {
        return [];
    }
    else {
        if (amount >= coins[0]) {
            let rest = (amount - coins[0])
            return [coins[0]].concat(amountToCoins(rest, coins))
        } else {

            coins.shift();
            return amountToCoins(amount, coins);
        }
    }
}

// console.log(amountToCoins(56, [25, 10, 5, 2, 1] ))

///////////////Program-15////////////////////////////
// --------Method-1-----------
function exp(b, n) {
    return Math.pow(b, n)

}

console.log(exp(3, 4))

///////////////Program-16////////////////////////////
// --------Method-1-----------
function extractUniqueCharacters(str) {
    // Create an empty Set to store unique characters
    const uniqueChars = new Set();

    // Iterate over each character in the string
    for (let char of str) {
        // Add the character to the Set
        uniqueChars.add(char);
    }

    // Return the Set directly
    return [...uniqueChars];
}

// console.log(extractUniqueCharacters('abcda'))

///////////////Program-17////////////////////////////
// --------Method-1-----------
function countLetterOccurrences(str) {
    // Create an empty object to store letter counts
    const letterCounts = {};

    // Iterate over each character in the string
    for (let char of str) {
        
            // letterCounts[char] = (letterCounts[char] || 0) + 1;
            if (letterCounts[char] === undefined) {
                letterCounts[char] = 1;
            } else {
                letterCounts[char]++;
            }
            
    }

    // Return the letterCounts object
    return letterCounts;
}

// console.log(countLetterOccurrences('abcdaboy'))

///////////////Program-18////////////////////////////
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Check if target is present at mid
        if (arr[mid] === target) {
            return mid;
        }
        // If target is greater, ignore left half
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        // If target is smaller, ignore right half
        else {
            right = mid - 1;
        }
    }

    // If we reach here, then the element was not found
    return -1;
}

// Example usage:
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const target = 9;
const index = binarySearch(arr, target);

if (index !== -1) {
    console.log(`Element ${target} found at index ${index}`);
} else {
    console.log(`Element ${target} not found in the array`);
}

///////////////Program-19////////////////////////////

function elementsLargerThan(arr, num) {
    // Filter the array to get elements larger than num
    return arr.filter(element => element > num);
}

// console.log(elementsLargerThan([4,5,2,3,7,1,0],5 ))

///////////////Program-20////////////////////////////

function generateRandomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = ""
    let charactersLength = characters.length
    for(let i =0; i<length;i++){
        password +=  characters.charAt(Math.floor(Math.random()*charactersLength))
    }
    return password
}

// console.log("Random ID:", generateRandomString(10));

///////////////Program-21////////////////////////////
function generateSubsets(array, length) {
    const subsets = [];

    // Recursive function to generate subsets
    function generate(currentSubset, start) {
        // Base case: if the current subset's length is equal to the desired length,
        // push it to the subsets array
        if (currentSubset.length === length) {
            subsets.push(currentSubset);
            return;
        }

        // Recursive case: iterate through the array starting from the given index
        // and generate subsets including the current element
        for (let i = start; i < array.length; i++) {
            generate(currentSubset.concat(array[i]), i + 1);
        }
    }

    // Start the recursive process with an empty subset and index 0
    generate([], 0);

    return subsets;
}

// Example usage:
const array = [1, 2, 3];
const subsetLength = 2;
const result = generateSubsets(array, subsetLength);
console.log("All possible subsets:", result);

///////////////Program-22////////////////////////////

function countOccurrences(str, letter) {
    let count=0
    
    for(let char of str){
        if(char===letter){
            count++
        }
    }
    return count
}

// console.log(countOccurrences('dalda', 'a'));

///////////////Program-23////////////////////////////

function countOccurrences(str) {
    let charCount={}
    
    for(let char of str){
        if(charCount[char]){
            charCount[char]++
        }else{
            charCount[char]=1;
        }
    }
    
    for(let char of str){
        if(charCount[char]===1){
            return char
        }
    }

    return null
}

console.log(countOccurrences('damda'));

///////////////Program-24////////////////////////////

function bubbleSort(arr) {
    let order = arr.sort((a,b)=> b-a)
    return order
}

// let input = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// console.log(bubbleSort(input));

///////////////Program-25////////////////////////////

function longestCountryName(countryNames) {
    let longestName = "";
    for (let i = 0; i < countryNames.length; i++) {
        if (countryNames[i].length > longestName.length) {
            longestName = countryNames[i];
        }
    }
    return longestName;
}
// let countries = ["Australia", "Germany", "United States of America"];
// console.log(longestCountryName(countries));

///////////////Program-26////////////////////////////

function longestSubstringWithoutRepeating(str) {
    let longestSubstr = "";
    let currentSubstr = "";
    let charIndexMap = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charIndexMap[char] === undefined || charIndexMap[char] < i - currentSubstr.length) {
            currentSubstr += char;
        } else {
            currentSubstr = str.substring(charIndexMap[char] + 1, i) + char;
        }

        charIndexMap[char] = i;

        if (currentSubstr.length > longestSubstr.length) {
            longestSubstr = currentSubstr;
        }
    }

    return longestSubstr;
}

// Example usage:
// let inputString = "abcabcbb";
// let longestSubstring = longestSubstringWithoutRepeating(inputString);
// console.log("Longest substring without repeating characters:", longestSubstring);

///////////////Program-27////////////////////////////
function longestPalindrome(s) {
    if (s === null || s.length === 0) return "";
    
    let start = 0;
    let maxLength = 1;
    
    // Function to expand around center for odd-length palindrome
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            let currentLength = right - left + 1;
            if (currentLength > maxLength) {
                start = left;
                maxLength = currentLength;
            }
            left--;
            right++;
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        // For odd-length palindromes
        expandAroundCenter(i, i);
        // For even-length palindromes
        expandAroundCenter(i, i + 1);
    }
    
    return s.substring(start, start + maxLength);
}

// // Example usage:
// let inputString = "babadada";
// let longestPalindromicSubstring = longestPalindrome(inputString);
// console.log("Longest palindromic substring:", longestPalindromicSubstring);


///////////////Program-28////////////////////////////

// Define a function that takes another function as a parameter
function greet(callback) {
    console.log("Hello!");
    // Call the callback function
    callback();
}

// Define a function that will be passed as a parameter
function sayGoodbye() {
    console.log("Goodbye!");
}

// Call the greet function and pass the sayGoodbye function as a parameter
greet(sayGoodbye);

///////////////Program-29////////////////////////////
///////Method-1//////////////
// Named function expression
// let myFunction = function functionName() {
//     console.log(functionName.name);
// };

// myFunction(); // Output: functionName

///////Method-2//////////////
//Or using a function declaration:
function myFunction() {
    console.log(myFunction.name);
}

myFunction(); // Output: myFunction

// function factorial(n) {
// 	if (n === 0 || n === 1) {
// 		return 1;
// 	} else {
// 		return n * factorial(n - 1);
// 	}
// }
// let num1 = 5;
// let result = factorial(num1);
// console.log("The factorial of given number is :" + result);






