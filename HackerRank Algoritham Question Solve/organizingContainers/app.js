function organizingContainers(container) {
    const n = container.length;
    const containerCapacity = new Array(n).fill(0);
    const ballCount = new Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            containerCapacity[i] += container[i][j];
            ballCount[j] += container[i][j];
        }
    }

    containerCapacity.sort((a, b) => a - b);
    ballCount.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (containerCapacity[i] !== ballCount[i]) {
            return "Impossible";
        }
    }

    return "Possible";
}

// Example usage
const queries = [
    [[1, 1], [1, 1]],
    [[0, 2], [1, 1]]
];

for (let query of queries) {
    console.log(organizingContainers(query));
}
