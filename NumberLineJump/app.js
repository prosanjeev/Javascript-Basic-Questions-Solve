
    function kangaroo(x1, v1, x2, v2) {
        // If the second kangaroo is ahead and moves faster, they will never meet.
        if (x2 > x1 && v2 > v1) {
            return "NO";
        }
        // If the first kangaroo is ahead and moves faster, they will never meet.
        if (x1 > x2 && v1 > v2) {
            return "NO";
        }
        // If both kangaroos have the same speed and starting position, they will meet.
        if (v1 === v2) {
            return x1 === x2 ? "YES" : "NO";
        }
        // Calculate the number of jumps required for the kangaroos to meet.
        let jumps = (x2 - x1) / (v1 - v2);
        // If the number of jumps is a positive integer, the kangaroos will meet.
        if (Number.isInteger(jumps) && jumps >= 0) {
            return "YES";
        } else {
            return "NO";
        }
    }
    

let output = kangaroo(0, 3, 4, 2)
console.log(output)