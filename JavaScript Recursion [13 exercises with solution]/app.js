///////////////Program-1////////////////////////////

function factorial(n) {
	if (n === 0 || n === 1) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}

// console.log("The factorial of given number is :" + factorial(5));

///////////////Program-2////////////////////////////

function gcd(a,b) {
    if(b===0){
        return a
    }else{
        return gcd(b, a%b)
    }
	
}

console.log("The GCD of given number is :" + gcd(4,8));

///////////////Program-3////////////////////////////

function  getIntegers(a, b) {
   
    let arr =[]
    if(a===b){
        return arr
    }else{
        
    }

    
    
}

console.log(getIntegers(2,9));