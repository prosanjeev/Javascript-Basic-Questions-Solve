function beautifulTriplets(d, arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] + d) && arr.includes(arr[i] + 2 * d)) {
            count++;
        }
    }
    return count;
}

// Example usage
const input = '7 3\n1 2 4 5 7 8 10';
const [n, d] = input.split('\n')[0].split(' ').map(Number);
const arr = input.split('\n')[1].split(' ').map(Number);

console.log(beautifulTriplets(d, arr)); // Output: 3
