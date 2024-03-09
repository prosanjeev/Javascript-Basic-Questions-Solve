function repeatedString(s, n) {
    const countA = (str) => str.split('').filter(char => char === 'a').length;
    const repeatCount = Math.floor(n / s.length);
    const remainder = n % s.length;
    return countA(s) * repeatCount + countA(s.slice(0, remainder));
}

// Example usage
console.log(repeatedString('aba', 10)); // Output: 7
console.log(repeatedString('a', 1000000000000)); // Output: 1000000000000