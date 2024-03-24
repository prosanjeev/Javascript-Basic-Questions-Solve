function extraLongFactorials(n) {
    let result = BigInt(1);
    for (let i = 2n; i <= BigInt(n); i++) {
        result *= i;
    }
    console.log(result.toString());
}

// Example usage
extraLongFactorials(25);
