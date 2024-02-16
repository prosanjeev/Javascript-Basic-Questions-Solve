function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count=0

    for(let i = 0; i<n ; i++){
        const firstNum = ar[i]

        for(let j = (i+1); j<n ; j++){
            if((firstNum+ar[j])%k===0){
                count++
            }
        }
    }
    return count
}

// n = 6, k = 3
let ar = [1, 3, 2, 6, 1, 2]

console.log(divisibleSumPairs(6,3,ar))