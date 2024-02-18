function sockMerchant(n, ar) {
    let pairs = 0;
    let socks = {};

    // Count the number of socks of each color
    for (let i = 0; i < n; i++) {
        if (socks[ar[i]]) {
            socks[ar[i]]++;
        } else {
            socks[ar[i]] = 1;
        }
    }

    // Count the number of pairs for each color
    for (let color in socks) {
        pairs += Math.floor(socks[color] / 2);
    }

    return pairs;
}

// Example usage
const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(sockMerchant(n, ar)); // Output: 3
