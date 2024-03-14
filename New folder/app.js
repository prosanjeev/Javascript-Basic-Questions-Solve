const inputArray = [7, 6, 6, 4, 1];
const targetSubsetSum = inputArray.reduce((acc, num) => acc + num, 0) / 2

function removeMinAndSumRest(arr, targetSum) {
    let currentSum = 0
    let subSet = [];
    let arrLength =arr.length

    for (let i = 0; i<arrLength; i++) {
        if(currentSum+arr[i]<=targetSum){
            subSet.push(arr[i])
            currentSum+=arr[i]
        }
    }
    return subSet
}

// Example usage


document.write(removeMinAndSumRest(inputArray, targetSubsetSum))
