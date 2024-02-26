function pageCount(n, p) {
    // Calculate the minimum number of pages to turn from the front
    const fromFront = Math.floor(p / 2);
    
    // Calculate the minimum number of pages to turn from the back
    const fromBack = Math.floor(n / 2) - Math.floor(p / 2);
    
    // Return the minimum of the two values
    return Math.min(fromFront, fromBack);
}

// Input
const n = parseInt(prompt("Enter the number of pages in the book:"));
const p = parseInt(prompt("Enter the page to turn to:"));

// Output
console.log(pageCount(n, p));
