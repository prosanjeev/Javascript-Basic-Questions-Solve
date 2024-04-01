function camelcase(s) {
    let wordCount = 1; // Start with 1 for the first word
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === char.toUpperCase()) {
            wordCount++;
        }
    }
    return wordCount;
}

// Example usage
const input = "saveChangesInTheEditor";
console.log(camelcase(input)); // Output: 5
