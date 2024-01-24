function compareTriplets(a, b) {
    let alice =0;
    let bob =0 ;
     
     for (let i = 0; i < a.length; i++){
         if(a[i] > b[i]){
            alice += 1 
         }
         if(a[i] < b[i]){
             bob += 1 
         }
     } return [alice, bob]
    
}

let a = [20, 40, 23];
let b = [12, 30, 28];

console.log(compareTriplets(a,b))