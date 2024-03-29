function introTutorial(V, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === V) {
            return i;
        }
    }
    return -1; // If the target value is not found in the array
}

// Sample input
const V = 4;
const arr = [1, 4, 5, 7, 9, 12];

// Output
console.log(introTutorial(V, arr)); // Output: 1
