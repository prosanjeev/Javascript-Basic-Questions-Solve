function encryption(s) {
    // Remove spaces from the input string
    s = s.replace(/\s/g, "");

    // Calculate the number of rows and columns
    let length = s.length;
    let rows = Math.floor(Math.sqrt(length));
    let cols = Math.ceil(Math.sqrt(length));

    // Ensure rows * cols is enough to cover the entire string
    if (rows * cols < length) {
        rows++;
    }

    // Create the grid
    let grid = [];
    for (let i = 0; i < rows; i++) {
        let row = s.substring(i * cols, (i + 1) * cols);
        grid.push(row);
    }

    // Encode the message
    let encodedMessage = "";
    for (let j = 0; j < cols; j++) {
        for (let i = 0; i < rows; i++) {
            if (j < grid[i].length) {
                encodedMessage += grid[i][j];
            }
        }
        encodedMessage += " ";
    }

    return encodedMessage.trim();
}

// Test cases
console.log(encryption("haveaniceday"));   // Output: "hae and via ecy"
console.log(encryption("feedthedog"));     // Output: "fto ehg ee dd"
console.log(encryption("chillout"));       // Output: "clu hlt io"
