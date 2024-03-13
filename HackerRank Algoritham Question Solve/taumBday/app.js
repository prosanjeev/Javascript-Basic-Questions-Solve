function taumBday(b, w, bc, wc, z) {
    // Calculate the cost of buying all black and white gifts without conversion
    const costWithoutConversion = BigInt(b) * BigInt(bc) + BigInt(w) * BigInt(wc);

    // Calculate the cost of converting all black gifts to white (or vice versa)
    const costWithConversion = BigInt(b) * BigInt(Math.min(bc, wc + z)) + BigInt(w) * BigInt(Math.min(wc, bc + z));

    // Return the minimum of the two costs
    return costWithoutConversion < costWithConversion ? costWithoutConversion.toString() : costWithConversion.toString();
}

// Example usage
console.log(taumBday(10, 10, 1, 1, 1)); // Output: 20
console.log(taumBday(5, 5, 2, 3, 4)); // Output: 37
console.log(taumBday(3, 6, 9, 1, 1)); // Output: 12
console.log(taumBday(7, 7, 4, 2, 1)); // Output: 35
console.log(taumBday(3, 3, 1, 9, 2)); // Output: 12
