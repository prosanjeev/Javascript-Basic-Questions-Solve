function equalizeArray(arr) {
    // Create a map to store the frequency of each element
    const frequencyMap = {};
    arr.forEach(num => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    });

    // Find the maximum frequency
    let maxFrequency = 0;
    for (let num in frequencyMap) {
        maxFrequency = Math.max(maxFrequency, frequencyMap[num]);
    }

    // Calculate the minimum number of deletions
    return arr.length - maxFrequency;
}

// Example usage
const arr = [1, 2, 4, 4, 4, 5, 6, 6, 7];
console.log(equalizeArray(arr)); // Output: 2
