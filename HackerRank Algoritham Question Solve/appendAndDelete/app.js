function appendAndDelete(s, t, k) {
    let i = 0;

    // Find the common prefix length
    while (i < s.length && i < t.length && s[i] === t[i]) {
        i++;
    }

    // Calculate the total operations needed
    const totalOperations = s.length + t.length - 2 * i;

    // Check if it's possible to convert s to t
    if (totalOperations <= k && (k - totalOperations) % 2 === 0 || k >= s.length + t.length) {
        return "Yes";
    } else {
        return "No";
    }
}

// Example usage
console.log(appendAndDelete("hackerhappy", "hackerrank", 9)); // Yes
console.log(appendAndDelete("aba", "aba", 7)); // Yes
console.log(appendAndDelete("ashley", "ash", 2)); // No
