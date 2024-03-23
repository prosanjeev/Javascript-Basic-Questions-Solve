function flatlandSpaceStations(n, c) {
    c.sort((a, b) => a - b);

    let maxDistance = c[0]; // Initialize with the distance to the first space station

    for (let i = 1; i < c.length; i++) {
        const currentStation = c[i];
        const prevStation = c[i - 1];
        const distance = Math.floor((currentStation - prevStation) / 2); // Calculate distance to the nearest space station
        maxDistance = Math.max(maxDistance, distance); // Update maxDistance if necessary
    }

    // Check the distance from the last station to the end
    maxDistance = Math.max(maxDistance, n - 1 - c[c.length - 1]);

    return maxDistance;
}

// Sample Input
console.log(flatlandSpaceStations(5, [0, 4])); // Output: 2
console.log(flatlandSpaceStations(6, [0, 1, 2, 4, 3, 5])); // Output: 0
