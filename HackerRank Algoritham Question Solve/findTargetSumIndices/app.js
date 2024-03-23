function findTargetSumIndices(arr, target) {
    const output = {};

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];

        if (complement in output) {
            return [output[complement], i];
        }
        output[arr[i]] = i;
    }
    return null; // If no such pair is found
}

// Example usage:
const array = [2, 7, 11, 15, 2];
const targetSum = 9;

const result = findTargetSumIndices(array, targetSum);

if (result) {
    const [index1, index2] = result;
    console.log(`Indices with the target sum ${targetSum}: [${index1}, ${index2}]`);
} else {
    console.log(`No indices found with the target sum ${targetSum}`);
}
