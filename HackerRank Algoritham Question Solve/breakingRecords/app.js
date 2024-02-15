function breakingRecords(scores) {
    let minScore = scores[0];
    let maxScore = scores[0];
    let minBreaks = 0;
    let maxBreaks = 0;

    for(let i =0; i<scores.length; i++){
        if(scores[i]<minScore){
            minScore=scores[i]
            minBreaks++
        }
        if(scores[i]>maxScore){
            maxScore=scores[i]
            maxBreaks++
        }
    }
    return [maxBreaks, minBreaks];
}

// Example usage
const scores1 = [10, 5, 20, 20, 4, 5, 2, 25, 1];
const scores2 = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

console.log(breakingRecords(scores1)); // Output: [2, 4]
console.log(breakingRecords(scores2)); // Output: [4, 0]