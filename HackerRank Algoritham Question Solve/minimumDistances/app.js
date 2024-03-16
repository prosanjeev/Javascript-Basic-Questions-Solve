function minimumDistances(a) {
    let indices = {};
    let minDistance = a.length;

    for (let i = 0; i < a.length; i++) {
        let num = a[i];
        if (num in indices) {
            let distance = i - indices[num];
            minDistance = Math.min(minDistance, distance);
        }
        indices[num] = i;
    }

    return minDistance !== a.length ? minDistance : -1;
}

// Sample Input
let a = [7, 1, 3, 4, 1, 7];

// Sample Output
console.log(minimumDistances(a)); // Output: 3
