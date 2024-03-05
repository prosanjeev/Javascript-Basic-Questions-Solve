function circularArrayRotation(a, k, queries) {
    const n = a.length;
    const result = [];
    k = k % n; // Reduce k to the range [0, n-1]

    // Perform the rotations
    const rotatedArray = [...a.slice(n - k), ...a.slice(0, n - k)];

    // Get the values at the specified indices
    for (let i = 0; i < queries.length; i++) {
        result.push(rotatedArray[queries[i]]);
    }

    return result;
}

// Example usage
const a = [1, 2, 3];
const k = 2;
const queries = [0, 1, 2];
console.log(circularArrayRotation(a, k, queries)); // Output: [2, 3, 1]
