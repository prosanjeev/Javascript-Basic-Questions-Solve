function squares(a, b) {
    // Write your code here
    let lowerRangeNum;
    if (Math.sqrt(a) % 1 === 0) {
        lowerRangeNum = Math.floor(Math.sqrt(a))
        lowerRangeNum -= 1
    } else {
        lowerRangeNum = Math.floor(Math.sqrt(a))
    }
    let upperRangeNum = Math.floor(Math.sqrt(b))

    return upperRangeNum - lowerRangeNum;
}