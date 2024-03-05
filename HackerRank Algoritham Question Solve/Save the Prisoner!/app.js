function saveThePrisoner(n, m, s) {
    // Calculate the position of the last candy using modulo operation
    return ((m - 1) + (s - 1)) % n + 1;
}

// Example usage
console.log(saveThePrisoner(5, 2, 1));  // Output: 2
console.log(saveThePrisoner(5, 2, 2));  // Output: 3
console.log(saveThePrisoner(7, 19, 2)); // Output: 6
console.log(saveThePrisoner(3, 7, 3));  // Output: 3
