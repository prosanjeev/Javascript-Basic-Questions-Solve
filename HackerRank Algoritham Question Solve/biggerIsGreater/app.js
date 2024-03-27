function biggerIsGreater(w) {
    // Convert the string to an array of characters for easier manipulation
    let wArray = w.split('');
    
    // Find the first non-increasing suffix
    let i = wArray.length - 1;
    while (i > 0 && wArray[i - 1] >= wArray[i]) {
        i--;
    }
    
    if (i <= 0) {
        return "no answer"; // If the entire string is non-increasing, return "no answer"
    }
    
    // Find the rightmost character that is greater than the pivot
    let j = wArray.length - 1;
    while (wArray[j] <= wArray[i - 1]) {
        j--;
    }
    
    // Swap the pivot with the rightmost character that is greater than itself
    [wArray[i - 1], wArray[j]] = [wArray[j], wArray[i - 1]];
    
    // Reverse the suffix
    wArray = wArray.slice(0, i).concat(wArray.slice(i).reverse());
    
    // Convert the array back to a string
    return wArray.join('');
}

// Sample Input
const testCases = [
    "ab",
    "bb",
    "hefg",
    "dhck",
    "dkhc"
];

// Sample Output
testCases.forEach(testCase => {
    console.log(biggerIsGreater(testCase));
});
