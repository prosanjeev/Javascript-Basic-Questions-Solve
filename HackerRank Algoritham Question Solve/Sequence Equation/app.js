function permutationEquation(p) {
    const n = p.length;
    const indexMap = {};
    for (let i = 0; i < n; i++) {
        indexMap[p[i]] = i + 1;
    }
    const result = [];
    for (let i = 1; i <= n; i++) {
        result.push(indexMap[indexMap[i]]);
    }
    return result;
}

// Example usage
const p1 = [2, 3, 1];
console.log(permutationEquation(p1)); // Output: [2, 3, 1]

const p2 = [4, 3, 5, 1, 2];
console.log(permutationEquation(p2)); // Output: [1, 3, 5, 4, 2]
