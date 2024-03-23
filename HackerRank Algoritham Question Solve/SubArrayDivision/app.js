
// function birthday(s, d, m) {
    
//     let count = 0;

//     for(let i=0; i<s.length; i++){
//         let sum = s.slice(i, i+m).reduce((acc, curr) => acc + curr, 0);
//         if(sum==d){
//             count++
//         }
//     }
//     return count
    
// }
function birthday(s, d, m) {
    let count = 0;

    for(let i=0; i<s.length; i++){
        let sum=0;
        for(let j=i; j<i+m; j++){
            sum+=s[j]
        }

        if(sum==d){
            count++
        }
    }
    return count
    
}



const s = [2, 2, 3, 1, 2,3,1];

console.log(birthday(s,4,2))