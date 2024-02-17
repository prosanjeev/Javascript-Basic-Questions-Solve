function migratoryBirds(arr) {
    // Count the frequency of each bird type
    let birdCounts = {};
    for (let i = 0; i < arr.length; i++) {
        let bird = arr[i];
        birdCounts[bird] = (birdCounts[bird] || 0) + 1;
    }

    // Find the maximum frequency
    let maxCount = 0;
    for (let bird in birdCounts) {
        if (birdCounts[bird] > maxCount) {
            maxCount = birdCounts[bird];
        }
    }

    // Find the bird type with the maximum frequency
    let mostFrequentBirds = [];
    for (let bird in birdCounts) {
        if (birdCounts[bird] === maxCount) {
            mostFrequentBirds.push(parseInt(bird));
        }
    }

    // Return the lowest id of the most frequent birds
    return Math.min(...mostFrequentBirds);
}

// Example usage
let arr1 = [1, 4, 4, 4, 5, 3];
console.log(migratoryBirds(arr1));  // Output: 4

let arr2 = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
console.log(migratoryBirds(arr2));  // Output: 3
