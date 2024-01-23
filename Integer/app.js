// function IntergerValue(number) {
//         remider=number%1
//         result=number-remider
//         return result;
// }

// function IntergerValue(number) {
//     let output = Math.trunc(number)
//         return output;
// }
//----------------------

// let abs= IntergerValue(8374.37467)   
// console.log(abs)

// let abs=IntergerValue(7465.74330008)
// console.log(abs)

// function reverseValue(number) {
//     let output = 0

//         while(number >= 1){
//             remider=number%10
//             output = output *10 + remider
//             number = Math.floor(number / 10)
//         }
//         return output;
// }

// let abs= reverseValue(12345)   
// console.log(abs)


// function factorial(n) {
//     let output=1
//     while(n>=1){
//         output*=n
//         n--
//     }           
//         return output;
// }
// function fect(n){
//     if(n == 1) return n
//     return fect(n-1)*n
// }


// console.log(fect(6))
// function sumPrimeNumber(n) {
//     sum = 0
//     for (i = 1; i <= n; i++) {
//         if (n % i === 0) {
//             sum;
//         } else { sum += i }
//     }
//     return sum;
// }
function sopn(n) {
    if (n < 2) return 0
    if (isPrime(n)) {
        return sopn(n - 1) + 1
    } else {
        return sopn(n - 1)
    }
}
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
    // let count = 2
    // ///if(n == 2) return true
    // while (count <= Math.sqrt(n)) {
    //     if (n % count == 0) {
    //         return false
    //     }
    //     count++
    // }
    // return true
}

console.log(sopn(20))
