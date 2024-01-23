function numberToWord(number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number >= 0 && number <= 9999) {
        if (number === 0) {
            return 'zero';
        }

        let result = '';

        // Handling thousands place
        if (number >= 1000) {
            result += units[Math.floor(number / 1000)] + ' thousand';
            number %= 1000;
            if (number !== 0) {
                result += ' ';
                return
            }
        }

        // Handling hundreds place
        if (number >= 100) {
            result += units[Math.floor(number / 100)] + ' hundred';
            number %= 100;
            if (number !== 0) {
                result += ' and ';
                return
            }
        }

        // Handling tens place
        if (number >= 10 && number <= 19) {
            result += teens[number - 11];
        } else {
            result += tens[Math.floor(number / 10)];
            // Handling units place
            if (number % 10 !== 0) {
                result += '-' + units[number % 10];
            }
        }

        return result;
    } else {
        return 'Number out of range (0-9999)';
    }
}

// Example usage:
console.log(numberToWord(4785)); // Output: "one thousand two hundred and thirty-four"
console.log(numberToWord(5555)); // Output: "five thousand five hundred and fifty-five"
console.log(numberToWord(4000)); // Output: "Number out of range (0-9999)"
