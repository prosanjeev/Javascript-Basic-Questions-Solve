function fairRations(B) {
    let loaves = 0;
    for (let i = 0; i < B.length - 1; i++) {
        if (B[i] % 2 !== 0) {
            B[i]++;
            B[i + 1]++;
            loaves += 2;
        }
    }
    return B.every(num => num % 2 === 0) ? loaves : "NO";
}

// Example usage
console.log(fairRations([2, 3, 4, 5, 6])); // Output: 4
console.log(fairRations([1, 2])); // Output: "NO"
