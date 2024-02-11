function findDigits(n) {
    let count = 0;
    let stringNum = n.toString();

    for (let i = 0; i < stringNum.length; i++) {
        let digit = stringNum[i]
        if (digit !== 0 && n % digit === 0) {
            count++
        }
    }

    return count;
}


console.log(findDigits(1012))